import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showMobileNavItem: false
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.MOBILE_NAV_ITEM:
      return state.set("showMobileNavItem", action.booleVal);
    default: 
      return state;
  }
}