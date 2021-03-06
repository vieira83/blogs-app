export default  class Posts {
  static getPosts() {
    return fetch('http://localhost:9001/posts')
    .then(response => response.json())
    .then(posts => {
      posts.sort( (a,b) => new Date(a.publish_date).getTime()  - new Date(b.publish_date).getTime() );
      return posts.length > 10 ? posts.splice(0, 10) : posts;
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
