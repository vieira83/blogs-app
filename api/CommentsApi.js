export default  class Comments {
  // this.postsUrl = 'http://localhost:9001/posts';
// Todo extract url and make it generic and abstract
  static getComments(postID) {
    return fetch(`http://localhost:9001/posts/${postID}/comments`)
    .then(response => response.json())
    .then(comments => comments.filter(comment => parseInt(comment.postId) === parseInt(postID) ) )
    .catch(error => {
      return error;
    });
  }

  static createComment(data) {
    return fetch(`http://localhost:9001/posts/${data.postID}/comments`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "postId":parseInt(data.postID),
        "user": data.user,
        "date": "2016-03-16",
        "content": data.content
      })
    })
    .then(response => response.json())
    .then(posts => posts)
    .catch(error => {
      return error;
    });
  }
}
