import React from "react";
import PropTypes from 'prop-types';
// Render static HTML:
import __html from "./list.html";
import { connect } from 'react-redux';
import { resetPost, getPost } from '../../../../store/actions/postAction';
import ViewComments from './ViewComments';
import FormComment from './formComment';

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
      this.state = {post:''};
  }
  componentDidMount() {
    this.props.getPost(this.props.params.id);
  }
  componentWillUnmount() {
    debugger;
    this.props.resetPost();
  }
  render() {
    return (
      <div className="post-details">
        <div>
          <h2 className="title">{this.props.post.title}</h2>
          <div className="author-info">
            <span className="author">By {this.props.post.author} </span>
            <span className="published-date">On {this.props.post.publish_date} </span>
          </div>

          <h6 className="description">{this.props.post.description} </h6>
          <div className="content">
            <p dangerouslySetInnerHTML={{__html: this.props.post.content}} />
          </div>
        </div>
        {
          this.props.post.id && !this.props.loading
          ? <ViewComments postID={this.props.post.id } />
          : null
        }
        <FormComment postID={this.props.post.id} className="comments"/>
      </div>
    )
  }
}

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    post: state.post.item,
    loading: state.post.loading
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    getPost: (id) => dispatch(getPost(id)),
    resetPost: (id) => dispatch(resetPost())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
