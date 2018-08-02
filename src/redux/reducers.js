import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import user from '../modules/user/_reducers/userReducers';
import warning from '../modules/utils/warning/_reducers/warningReducers';

// Combine Reducers
const reducers = combineReducers({
  user,
  notifications,
  warning,
  form: formReducer,
  router: routerReducer,
});

export default reducers;
