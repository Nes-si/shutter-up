import {store} from 'index';
import {data} from 'store/fixtures';

export const CATEGORY_SET   = 'sunroof/portfolio/CATEGORY_SET';
export const CATEGORY_NEXT  = 'sunroof/portfolio/CATEGORY_NEXT';
export const CATEGORY_PREV  = 'sunroof/portfolio/CATEGORY_PREV';


export function categorySet(category) {
  return {
    type: CATEGORY_SET,
    category
  }
}

export function categoryNext() {
  return {
    type: CATEGORY_NEXT
  }
}

export function categoryPrev() {
  return {
    type: CATEGORY_PREV
  }
}

let initalState = {
  category: 0,
  direction: 'down'
};

export default function portfolioReducer(state = initalState, action) {
  switch (action.type) {
    case CATEGORY_SET:
      let direction = action.category < state.category ? 'up' : 'down';
      return {
        ...state,
        category: action.category,
        direction
      };

    case CATEGORY_NEXT:
      if (state.category === data.length - 1)
        return state;
              
      return {
        ...state,
        category: ++state.category,
        direction: 'down'
      };
      
    case CATEGORY_PREV:
      if (state.category === 0)
        return state;
      
      return {
        ...state,
        category: --state.category,
        direction: 'up'
      };
      
    default:
      return state;
  }
}
