import * as types from '../actions/actionTypes';
const initialState = {
  item:{},
  loading: false
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
      case types.RESET_POST:
        return state = initialState
    default:
      return state
  }
}
