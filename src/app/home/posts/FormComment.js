import React from "react";
import { Field, reduxForm , SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
// Render static HTML:
import { connect } from 'react-redux';
import validate from './validate';
import { postComment } from '../../../../store/actions/commentsActions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  wait (time) {
    return new Promise((resolve, reject) => setTimeout(resolve, time));
  }

  submitForm ({content='', user=''}) {
    const {postID} = this.props;

    return this.props.postComment({content,user, postID})
    .catch(response => {
      throw new SubmissionError(response.errors);
    });
  }

  RenderField (field) {
    const has_error = field.meta.touched && field.meta.error;
    return(<div className="input-row form-group">
      <input className={`form-control ${ has_error ? 'is-invalid' : ''}`} {...field.input} type={field.type} />
      {
        field.meta.touched && field.meta.error &&
        <div className="help-block"><span className="error text-danger">{field.meta.error} </span></div>
      }
    </div>)
  }

  RenderTextAreaField (field) {
    const has_error = field.meta.touched && field.meta.error;
    return(
      <div className="input-row form-group">
        <textarea className={`form-control ${ has_error ? 'is-invalid' : ''}`}  {...field.input} type={field.type} />
        {
          field.meta.touched && field.meta.error &&
          <div className="help-block"><span className="error text-danger">{field.meta.error}</span></div>
        }
      </div>
    )
  }

  render () {
    const {handleSubmit, error, pristine, reset, submitting} = this.props
    return (
      <div className="form-comment card card-outline-secondary">
       <div className="card-header">
          <h5 className="mb-0">Submit Comment</h5>
        </div>
        <div className="card-block">
          <form className="form" role="form" onSubmit={handleSubmit(this.submitForm)}>
            <label htmlFor="user">User</label>
          <Field name="user" component={this.RenderField}  type='text' placeholder="name" />
          <label htmlFor="content">Comment</label>
          <Field name="content" component={this.RenderTextAreaField} />
            {error && <strong>{error}</strong>}
          <button className="btn btn-success btn-lg" type='submit' type="submit" disabled={ pristine||submitting}>Submit</button>
          </form>
        </div>
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
    initialValues: state.values
  }
};

const CommentReduxForm = reduxForm({
  form: 'CommentForm',
  validate
})(CommentForm);

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    postComment: data => dispatch(postComment(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentReduxForm)
