import * as types from './actionTypes';
import posts from '../../api/PostsApi';

function requestPosts() {
  return {type: types.REQUEST_POSTS};
}
export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function requestPost(post) {
  return {type: types.GET_POST};
}

export function loadPostSuccess(post) {
  return {type: types.GET_POST_SUCCESS, post};
}

export function loadPostsFromAPI() {
  debugger;
  return (dispatch) => {
    return posts.getPosts().then(items => {
      debugger;
      dispatch(loadPostsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
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

export function fetchPosts() {
  return (dispatch, getState) => {
    const posts = state.posts;
    if (!posts || !posts.isFetching) {
      return dispatch(loadPostsFromAPI())
    }
  }
}
