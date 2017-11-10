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
}
