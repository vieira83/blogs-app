import * as types from './actionTypes';
import posts from '../../api/PostsApi';

export function requestPost(post) {
  return {type: types.GET_POST};
}

export function loadPostSuccess(post) {
  return {type: types.GET_POST_SUCCESS, post};
}

export function resetPost() {
  return {type: types.RESET_POST};
}

export function getPost(id) {
  debugger;
  return (dispatch) => {
    return posts.get(id).then(items => {
      debugger;
      dispatch(loadPostSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}
