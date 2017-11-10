import React from "react";

// Render static HTML:
import __html from "./home.html";
import PostsApi from "../../../api/PostsApi";
import {Router, Link} from 'react-router';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {posts: []};
  }

  listPosts(post) {
    return (
      <div key={post.id}>
          <Link to={`/posts/${post.id}`} className="post-link">
            {post.title}
          </Link>
          <p>{post.description}</p>
          <hr/>
      </div>
    )
  }

  componentDidMount() {
    PostsApi.getPosts().then(data => {
      let posts = data.map( post => this.listPosts(post) );
      this.setState({posts:posts});
    });
  }

  render() {
    return <div>
        <div dangerouslySetInnerHTML={{__html}} />
        {this.state.posts}
    </div>
  }
}
