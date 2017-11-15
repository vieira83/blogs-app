'use strict';
import React from "react";
import PropTypes from 'prop-types';

// Render static HTML:
import __html from "./home.html";
import PostsApi from "../../../api/PostsApi";
import {Router, Link} from 'react-router';
import { connect } from 'react-redux';
import {
  fetchPosts,
  loadPostsFromAPI
} from '../../../store/actions/postActions';

  class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  listPosts (post) {
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
    this.props.fetchPosts();
  }

  render() {
    return <div>
        <div dangerouslySetInnerHTML={{__html}} />DGsgfds
        {this.props.posts.map(post => this.listPosts(post))}
    </div>
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    // You can now say this.props.books
    posts: state.posts.items,
    loading: state.posts.loading
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    fetchPosts: () => dispatch(loadPostsFromAPI())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
