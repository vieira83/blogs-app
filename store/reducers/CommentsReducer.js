import * as types from '../actions/actionTypes';

//define the initial state
const initialState = {
  items:[],
  loading: false
}

export  function CommentsReducer(state = initialState, action) {
  if(!action) {
    return state;
  }
  switch (action.type) {
    case types.REQUEST_COMMENTS:
      return Object.assign({}, state, {
        loading: true,
      })
    case types.LOAD_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.comments,
        lastUpdated: action.receivedAt
      })
    case types.RESET_COMMENTS:
      return state = initialState;
    default:
      return state
  }
}
