import React from "react";
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
// Render static HTML:
import { connect } from 'react-redux';
// import { resetPost, getPost } from '../../../../store/actions/postAction';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render(){
    const {handleSubmit, pristine, reset, submitting} = this.props
    const required = value => (value ? undefined : 'Required');
    return (
      <div>
        <hr/>
       <h5>Submit a Comment</h5>
        <form>

        <Field name='content' component='textarea' placeholder="comment" validate={required}/><br/>
        <Field name='user' component='input' type='text' placeholder="name" validate={required}/><br/><br/>
        <button type='submit' type="submit" disabled={submitting}>Submit</button><br/>

        </form>
      </div>
    )
  }
}

// ViewPost.propTypes = {
//   post: PropTypes.object.isRequired,
//   loading: PropTypes.bool.isRequired
// }

// const FormCode = reduxForm({
//   form: 'contact'
// })(CommentForm);


// Maps state from store to props
// const mapStateToProps = (state) => {
//   return {
//     post: state.post.item,
//     loading: state.post.loading
//   }
// };

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook

    onSubmit: data => dispatch(myActionToDoStuff(data))
  }
};

export default reduxForm({form: 'contact'})(CommentForm);
