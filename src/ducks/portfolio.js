import {store} from 'index';
import {data} from 'store/fixtures';

export const CATEGORY_SET   = 'sunroof/portfolio/CATEGORY_SET';
export const CATEGORY_NEXT  = 'sunroof/portfolio/CATEGORY_NEXT';
export const CATEGORY_PREV  = 'sunroof/portfolio/CATEGORY_PREV';
export const UNLOCK         = 'sunroof/portfolio/UNLOCK';

const LOCK_TIME = 2000;

let timer = null;

export function unlock() {
  return {
    type: UNLOCK
  };
}

function getIndex() {
  return store.store.getState().portfolio.index;
}

 function setSlide(index) {
  return dispatch => {
    let length = getLength();
    if ((index == length) != (getIndex() == length))
      dispatch({type: CLICK_MENU, index});
    else
      dispatch({
        type: SET_SLIDE,
        index: index
      });
    
    if (!timer) {
      timer = setTimeout(() => {
        dispatch({type: UNLOCK});
        timer = null;
      }, LOCK_TIME);
    }
  }
}

 function nextSlide() {
  return dispatch => {
    if (getIndex() == getLength() - 1)
      dispatch({type: CLICK_MENU});
    else
      dispatch({type: MOVE_NEXT});
    
    if (!timer) {
      timer = setTimeout(() => {
        dispatch({type: UNLOCK});
        timer = null;
      }, LOCK_TIME);
    }
  }
}

 function prevSlide() {
  return dispatch => {
    if (getIndex() == getLength())
      dispatch({type: CLICK_MENU});
    else
      dispatch({type: MOVE_PREV});
    
    if (!timer) {
      timer = setTimeout(() => {
        dispatch({type: UNLOCK});
        timer = null;
      }, LOCK_TIME);
    }
  }
}

export function setCategory(category) {
  return {
    type: CATEGORY_SET,
    category
  }
}

export function nextCategory() {
  return {
    type: CATEGORY_NEXT
  }
}

export function prevCategory() {
  return {
    type: CATEGORY_PREV
  }
}

let initalState = {
  category: 0,
  locked: true
};

export default function portfolioReducer(state = initalState, action) {
  switch (action.type) {
    case UNLOCK:
      return {
        ...state,
        locked: false
      };

    case CATEGORY_SET:
      if (state.locked)
        return state;
      return {
        ...state,
        category: action.category,
        //locked: true
      };

    case CATEGORY_NEXT:
      if (state.locked || state.category === data.length - 1)
        return state;
              
      return {
        ...state,
        category: ++state.category,
        //locked: true
      };
      
    case CATEGORY_PREV:
      if (state.locked || state.category === 0)
        return state;
      
      return {
        ...state,
        category: --state.category,
        //locked: true
      };
      
    default:
      return state;
  }
}
