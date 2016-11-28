export const OPEN_PAGE    = 'app/nav/OPEN_PAGE';
export const OPEN_MENU    = 'app/nav/OPEN_MENU';
export const CLOSE_MENU   = 'app/nav/CLOSE_MENU';

export const PAGE_HOME    = 'app/nav/pages/PAGE_HOME';
export const PAGE_ABOUT   = 'app/nav/pages/PAGE_ABOUT';



export function openPage(pageType) {
  return {
    type: OPEN_PAGE,
    pageType
  };
}

export function openMenu() {
  return {
    type: OPEN_MENU
  };
}
export function closeMenu() {
  return {
    type: CLOSE_MENU
  };
}


const initialState = {
  openedPage: PAGE_HOME,
  openedMenu: true
};


export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_PAGE:
      return {
        ...state,
        openedPage: action.pageType,
        openedMenu: false
      };
  
    case OPEN_MENU:
      return {...state, openedMenu: true};
      
    case CLOSE_MENU:
      return {...state, openedMenu: false};
      
    default:
      return state;
  }
}
