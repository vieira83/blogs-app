import * as types from './actionTypes';
import posts from '../../api/PostsApi';

function requestPosts() {
  return {type: types.REQUEST_POSTS};
}
export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function requestPost(post) {
  return {type: types.GET_POST, post};
}

export function loadPostSuccess(id) {
  return {type: types.GET_POST_SUCCESS, id};
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
    return state.posts.filter(post => {
      if (post.id === id) {
        dispatch(loadPostSuccess(item));
        return post;
      }
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
