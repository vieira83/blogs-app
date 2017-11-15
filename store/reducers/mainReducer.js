// src/reducers/rootReducer.js

import {combineReducers} from 'redux';
import {PostsReducer, PostReducer} from './PostsReducer';

const mainReducer = combineReducers({
  // short hand property names
  posts:PostsReducer,
  post:PostReducer
})

export default mainReducer;
