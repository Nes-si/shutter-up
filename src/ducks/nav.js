import {store, PAGE_HOME, PAGE_CONTACTS, PAGE_GALLERY} from 'index';
import {getCatByName} from 'store/fixtures';
import {categorySet} from './portfolio';

export const PAGE_OPEN    = 'app/nav/PAGE_OPEN';
export const MENU_OPEN    = 'app/nav/MENU_OPEN';
export const MENU_CLOSE   = 'app/nav/MENU_CLOSE';


export function pageOpen(to, from) {
  return dispatch => {
    dispatch({
      type: PAGE_OPEN,
      to,
      from
    });
    
    if (to.name == PAGE_GALLERY) {
      let cat = getCatByName(to.params.cat);
      store.dispatch(categorySet(cat.index));
    } else if (to.name !== PAGE_CONTACTS && to.name !== from.name) {
      store.dispatch(categorySet(0));
    }
  };
}

export function menuOpen() {
  return {
    type: MENU_OPEN
  };
}
export function menuClose() {
  return {
    type: MENU_CLOSE
  };
}


const initialState = {
  openedPage: PAGE_HOME,
  openedMenu: true
};


export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_OPEN:
      let openedMenu = false;
      if (action.to.name == PAGE_HOME || action.to.name == PAGE_CONTACTS)
        openedMenu = true;
      
      return {
        ...state,
        openedPage: action.to.name,
        openedMenu
      };
  
    case MENU_OPEN:
      return {...state, openedMenu: true};
      
    case MENU_CLOSE:
      return {...state, openedMenu: false};
      
    default:
      return state;
  }
}
