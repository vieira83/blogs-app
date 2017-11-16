export default  class Comments {
  // this.postsUrl = 'http://localhost:9001/posts';
// Todo extract url and make it generic and abstract
  static getComments(postID) {
    return fetch(`http://localhost:9001/posts/${postID}/comments`)
    .then(response => response.json())
    .then(comments => comments.filter(comment => comment.postId === postID) )
    .catch(error => {
      return error;
    });
  }

  static createComment(data) {
    return fetch('http://localhost:9001/posts')
    .then(response => response.json())
    .then(posts =>  posts.filter(post => post.id === parseInt(id,10))[0])
    .catch(error => {
      return error;
    });
  }
}
