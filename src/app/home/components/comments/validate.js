const validate = (values)=> {
  let errors = {};

  if (!values.content || values.content.trim() === ''){
    errors.content = 'Enter a Comment';
  }

  if (!values.user || values.user.trim() === ''){
    errors.user = 'Enter your user name';
  }

  return errors;
}

export default validate;
