import posts from '../api/Posts/posts';

export function loadCats() {
  return function(dispatch) {
    return posts.getAllCats().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}
