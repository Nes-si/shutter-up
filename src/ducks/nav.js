import {PAGE_HOME, PAGE_CONTACTS} from 'index';

export const PAGE_OPEN    = 'app/nav/PAGE_OPEN';
export const MENU_OPEN    = 'app/nav/MENU_OPEN';
export const MENU_CLOSE   = 'app/nav/MENU_CLOSE';


export function pageOpen(to, from) {
  return {
    type: PAGE_OPEN,
    to,
    from
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
