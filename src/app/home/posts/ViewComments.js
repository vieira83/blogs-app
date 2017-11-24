import React from "react";
import PropTypes from 'prop-types';
// Render static HTML:
import __html from "./list.html";
import { connect } from 'react-redux';
import {
  resetComments,
  loadCommentsFromAPI
} from '../../../../store/actions/commentsActions';

class ViewComments extends React.Component {
  constructor(props) {
    super(props);
  }

  listComments (comment) {
    return (
      <div key={comment.id} className="comment-info">
          <div className="user-info">
            <span className="user">By {comment.user}, </span>
            <span className="date">On {comment.date}</span>
          </div>
          <p className="comment-text content">{comment.content}</p>
      </div>
    )
  }

  componentDidMount() {
    const { postID } = this.props
    this.props.getComments(postID);
  }
  componentWillUnmount () {
    this.props.resetComments();
   }
  render() {
    return <div>
          <br/>
          <h5> COMMENTS </h5>
          {this.props.comments.map( comment => this.listComments(comment) )}
    </div>
  }
}

ViewComments.propTypes = {
  loading: PropTypes.bool.isRequired
}

// Maps state from store to props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    // You can now say this.props.books
    comments: state.comments.items,
    loading: state.comments.loading
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    getComments: (id) => dispatch(loadCommentsFromAPI(id)),
    resetComments: () => dispatch(resetComments())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewComments);
