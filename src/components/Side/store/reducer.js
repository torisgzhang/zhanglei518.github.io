import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagLists: [],
  listTotalNum: 0
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_TAGS:
      return state.merge({
        "tagLists": action.tagLists,
        "listTotalNum": action.listTotalNum
      });
    default: 
      return state;
  }
}