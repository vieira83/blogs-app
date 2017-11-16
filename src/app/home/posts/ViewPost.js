import React from "react";
import PropTypes from 'prop-types';
// Render static HTML:
import __html from "./list.html";
import { connect } from 'react-redux';
import { getPost } from '../../../../store/actions/postActions';
import ViewComments from './ViewComments';

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPost(this.props.params.id);
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
        <ViewComments post={this.props.post.id}/>
    </div>
  }
}

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

// Maps state from store to props
const mapStateToProps = (state) => {
  console.log(state.post.items);
  return {
    // You can now say this.props.books
    post: state.post.item,
    loading: state.post.loading
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    getPost: (id) => dispatch(getPost(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
