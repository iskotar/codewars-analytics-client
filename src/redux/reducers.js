import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import group from '../modules/group/_reducers/groupReducers';
import user from '../modules/user/_reducers/userReducers';
import codewars from '../modules/codewars/_reducers/codewarsReducers';
import warning from '../modules/utils/warning/_reducers/warningReducers';

// Combine Reducers
const rootReducer = combineReducers({
  group,
  user,
  codewars,
  notifications,
  warning,
  form: formReducer,
});

export default rootReducer;
