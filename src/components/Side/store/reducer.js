import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagLists: []
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_TAGS:
      return state.set("tagLists", action.tagLists);
    default: 
      return state;
  }
}