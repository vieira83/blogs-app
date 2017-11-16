import React from "react";
import PropTypes from 'prop-types';
// Render static HTML:
import __html from "./list.html";
import { connect } from 'react-redux';
import { resetPost, getPost } from '../../../../store/actions/postAction';
import ViewComments from './ViewComments';

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPost(this.props.params.id);
  }
  componentWillUnmount() {
    debugger;
    this.props.resetPost();
  }
  render() {
    return <div>
          <div dangerouslySetInnerHTML={{__html}} />
              <h2>{this.props.post.title}</h2>
              <hr/>
              <h3>{this.props.post.description} </h3>
              <div>
                <p dangerouslySetInnerHTML={{__html: this.props.post.content}} />
              </div>
              <div>
              <br/>
              <span>Date Published: {this.props.post.publish_date} </span><br/>
              <span>Author: {this.props.post.author} </span>
              
          </div>
            { this.props.post.id && !this.props.loading? <ViewComments postID={this.props.post.id } /> : null }
    </div>
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
