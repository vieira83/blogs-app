export default  class Posts {
  // this.postsUrl = 'http://localhost:9001/posts';

  static getPosts() {
    return fetch('http://localhost:9001/posts').then(response => {
      const data = response.json();
      return data.length > 10 ? data.splice(0, 10) : data;
    }).catch(error => {
      return error;
    });
  }

  static get(id) {
    return fetch('http://localhost:9001/posts')
    .then(response => response.json())
    .then(posts =>  posts.filter(post => post.id === parseInt(id,10))[0])
    .catch(error => {
      return error;
    });
  }
}
