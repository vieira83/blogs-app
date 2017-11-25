'use strict';
import React from "react";
import PropTypes from 'prop-types';

// Render static HTML:
import __html from "./home.html";

import PostsApi from "../../../../api/PostsApi";
import {Router, Link} from 'react-router';
import { connect } from 'react-redux';
import {
  fetchPosts,
  loadPostsFromAPI
} from '../../../../store/actions/postsActions';

  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  listPosts (post) {
    return (
      <div key={post.id} className="post-info">
        <div className="post-content">
          <Link to={`/posts/${post.id}`} className="post-link">
            <h4 className="title">{post.title}</h4>
            <h5 dangerouslySetInnerHTML={{__html:post.description}} />
            <div dangerouslySetInnerHTML={{__html:post.content}} className="truncate" />
          </Link>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div className="homepage">
        { this.props.loading
          ? <h2>Loading...</h2>
          : <div className="posts-container">
              <div dangerouslySetInnerHTML={{__html}} />
              {this.props.posts.map(post => this.listPosts(post))}
            </div>
        }
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
    posts: state.posts.items,
    loading: state.posts.loading
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(loadPostsFromAPI())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
