import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isMobile: false
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_SCREEN_WIDTH:
      return state.merge({
        isMobile: action.isMobile
      });
    default: 
      return state;
  }
}