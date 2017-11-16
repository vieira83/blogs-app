import * as types from './actionTypes';
import comments from '../../api/CommentsApi';

function requestComments() {
  return {type: types.REQUEST_COMMENTS};
}
export function loadCommentsSuccess(comments) {
  return {type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function resetComments() {
  return {type: types.RESET_COMMENTS};
}

export function loadCommentsFromAPI(postID) {
  debugger;
  return (dispatch) => {
    return comments.getComments(postID).then(items => {
      debugger;
      dispatch(loadCommentsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function postComment(data) {
  debugger;
  return (dispatch) => {
    return comments.createComment(data).then(items => {
      debugger;
      dispatch(loadCommentsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function fetchComments() {
  return (dispatch, getState) => {
    const posts = state.comments;
    if (!posts || !CommentsApi.loading) {
      return dispatch(loadCommentsFromAPI())
    }
  }
}
