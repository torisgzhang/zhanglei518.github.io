import { actionTypes }  from './index';
import axios from 'axios';
import { fromJS } from "immutable";

const tagsAction = (tagLists) => ({
  type: actionTypes.GET_TAGS,
  tagLists: fromJS(tagLists)
});

export const getTagsFromNet = () => {
  return (dispatch) => {
    axios.get('/api/tags.json').then((res) => {
      const data = res.data.data;
      dispatch(tagsAction(data));
    }).catch(() => {
      console.log('error')
    });
  }
}
