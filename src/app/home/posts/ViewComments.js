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
      <div key={comment.id}>
          <hr/>
          <p>{comment.content}</p>
          <span>{comment.user}</span><br/>
          <span>{comment.date}</span>

      </div>
    )
  }

  componentDidMount() {
    debugger;
    const { postID } = this.props
    this.props.getComments(postID);
  }
  componentWillUnmount () {
    this.props.resetComments();
   }
  render() {
    return <div>
          <br/>
          <h4> COMMENTS </h4>
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