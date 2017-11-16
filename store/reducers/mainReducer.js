// src/reducers/rootReducer.js

import {combineReducers} from 'redux';
import {PostsReducer, PostReducer} from './PostsReducer';
import {CommentsReducer} from './CommentsReducer';

const mainReducer = combineReducers({
  // short hand property names
  posts:PostsReducer,
  post:PostReducer,
  comments:CommentsReducer
})

export default mainReducer;
