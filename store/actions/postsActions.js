import * as types from './actionTypes';
import posts from '../../api/PostsApi';

export function requestPosts() {
  return {type: types.REQUEST_POSTS};
}

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPostsFromAPI() {
  return (dispatch) => {
    return posts.getPosts().then(items => {
      dispatch(loadPostsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function fetchPosts() {
  return (dispatch, getState) => {
    const posts = state.posts;
    if (!posts || !posts.loading) {
      return dispatch(loadPostsFromAPI())
    }
  }
}
