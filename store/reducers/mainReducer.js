// src/reducers/rootReducer.js

import {combineReducers} from 'redux';
import {PostsReducer} from './PostsReducer';
import {PostReducer} from './PostReducer';
import {CommentsReducer} from './CommentsReducer';
import { reducer as formReducer } from 'redux-form';

const mainReducer = combineReducers({
  // short hand property names
  posts:PostsReducer,
  post:PostReducer,
  comments:CommentsReducer,
  form: formReducer
})

export default mainReducer;
