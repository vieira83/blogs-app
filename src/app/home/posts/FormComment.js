import React from "react";
import { Field, reduxForm , SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
// Render static HTML:
import { connect } from 'react-redux';
import { postComment } from '../../../../store/actions/commentsActions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm ({content='', user=''}) {
    debugger;
    const {postID} = this.props;
    let error= false;
    if (content.trim() === ''){
      error = true;
    }
    if (user.trim() === ''){
      error = true;
    }
    alert(content);
    if (error) {
      throw new SubmissionError("REQUIRED FIELD");
    }else {
      debugger;
      this.props.postComment({content,user, postID});
    }
  }

  RenderField (field) {
    return(<div className="input-row">
      <input {...field.input} type={field.type} />
      {field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>)
  }

  render () {
    const {handleSubmit, pristine, reset, submitting} = this.props
    const required = value => (value ? undefined : 'Required');
    return (
      <div>
        <hr/>
       <h5>Submit a Comment</h5>
        <form onSubmit={handleSubmit(this.submitForm)}>
        <label htmlFor="content">Comment</label>
        <Field name='content' component={this.RenderField} /><br/>
          <label htmlFor="user">User</label>
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


// /Maps state from store to props
const mapStateToProps = (state) => {
  return {
    initialValues: {
      props: [{}]
    }
  }
};
const CommentReduxForm = reduxForm({
  form: 'addComment',
  fields: ['content', 'user']
})(CommentForm);

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook

    postComment: data => dispatch(postComment(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentReduxForm)
