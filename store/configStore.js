import {createStore, applyMiddleware} from 'redux';
import mainReducer from './reducers/mainReducer';
import thunk from 'redux-thunk';

export default function configStore() {
  return createStore(
    mainReducer,
    applyMiddleware(thunk)
  );
}
