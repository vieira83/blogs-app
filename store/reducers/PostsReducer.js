//define the initial state
import * as types from '../actions/actionTypes';
const initialState = {
  items:[],
  loading: false
}

//define a reducer with an initialized state action
export  function  PostsReducer(state = initialState, action) {
  //eventually adding logic to handle create, update, and delete
  if(!action) {
    return state;
  }
  switch (action.type) {
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        loading: true,
      })
    case types.LOAD_POSTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function  PostReducer(state = initialState, action) {
  //eventually adding logic to handle create, update, and delete
  if(!action) {
    return state;
  }
  switch (action.type) {
    case types.GET_POST:
      return Object.assign({}, state, {
        loading: true,
      })
    case types.GET_POST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        item: action.post,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
