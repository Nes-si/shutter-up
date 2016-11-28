import store from 'index';

export const SET_SLIDE               = 'sunroof/portfolio/SET_SLIDE';
export const MOVE_NEXT               = 'sunroof/portfolio/MOVE_NEXT';
export const MOVE_PREV               = 'sunroof/portfolio/MOVE_PREV';
export const SHOW_DESKTOP_PREVIEW    = 'sunroof/portfolio/SHOW_DESKTOP_PREVIEW';
export const SHOW_MOBILE_PREVIEW     = 'sunroof/portfolio/SHOW_MOBILE_PREVIEW';
export const HIDE_PREVIEW            = 'sunroof/portfolio/HIDE_PREVIEW';
export const UNLOCK                  = 'sunroof/portfolio/UNLOCK';
export const CLICK_MENU              = 'sunroof/portfolio/CLICK_MENU';

const LOCK_TIME = 2000;

var timer = null;

export function unlock() {
  return {
    type: UNLOCK
  };
}

function getIndex() {
  return store.store.getState().portfolio.index;
}

function getLength() {
  return store.store.getState().portfolio.length;
}

export function setSlide(index) {
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

export function nextSlide() {
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

export function prevSlide() {
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

export function clickMenu() {
  return dispatch => {
    dispatch({type: CLICK_MENU});
    
    if (!timer) {
      timer = setTimeout(() => {
        dispatch({type: UNLOCK});
        timer = null;
      }, LOCK_TIME);
    }
  };
}

export function showDesktopPreview() {
  return {
    type: SHOW_DESKTOP_PREVIEW
  };
}

export function showMobilePreview() {
  return {
    type: SHOW_MOBILE_PREVIEW
  };
}

export function hidePreview() {
  return {
    type: HIDE_PREVIEW
  };
}

let portfolioItems = require('../store/fixtures.js').portfolioItems;
window.portfolioItems = portfolioItems;

let initalState = {
  index: 0,
  lastIndex: 0,
  length: Object.keys(portfolioItems).length,
  currentView: 'PortfolioItems',
  showPreview: false,
  previewType: 'desktop',
  items: portfolioItems,
  direction: 'top',
  locked: true
};

export default function portfolioReducer(state = initalState, action) {
  switch (action.type) {
    case UNLOCK:
      return {
        ...state,
        locked: false
      };

    case SET_SLIDE:
      if (state.locked || state.showPreview)
        return state;
      return {
        ...state,
        index: action.index,
        direction: state.index > action.index ? 'top' : 'bottom',
        currentView: action.index === state.length ? 'PortfolioAbout' : 'PortfolioItems',
        locked: true
      };

    case SHOW_DESKTOP_PREVIEW:
      return {
        ...state,
        showPreview: true,
        previewType: 'desktop'
      };

    case SHOW_MOBILE_PREVIEW:
      return {
        ...state,
        showPreview: true,
        previewType: 'mobile'
      };

    case HIDE_PREVIEW:
      return {
        ...state,
        showPreview: false,
        previewType: 'mobile'
      };

    case MOVE_NEXT:
      if (state.locked ||
          state.showPreview ||
          state.index === state.length)
        return state;
              
      return {
        ...state,
        index: ++state.index,
        direction: 'top',
        locked: true
      };
      
    case MOVE_PREV:
      if (state.locked ||
          state.showPreview ||
          state.index === 0)
        return state;
      
      return {
        ...state,
        index: --state.index,
        direction: 'bottom',
        locked: true
      };
  
    case CLICK_MENU:
      if (state.locked ||
          state.showPreview)
        return state;
      
      if (state.currentView == 'PortfolioItems')
        return {
          ...state,
          lastIndex: state.index,
          index: state.length,
          currentView: 'PortfolioAbout'
        };
        
      let index = state.lastIndex;
      if (action.index != undefined && action.index < state.length)
        index = action.index;
      
      return {
        ...state,
        index,
        currentView: 'PortfolioItems',
        locked: true
      };
      
    // do reducer stuff
    default: return state;
  }
}
