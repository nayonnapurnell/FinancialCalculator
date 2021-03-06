import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import navigation from './navigation';

export default combineReducers({
  router: routerReducer,
  counter,
  navigation
});
