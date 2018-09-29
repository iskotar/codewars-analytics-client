import { initialize } from 'redux-form';
import { push } from 'connected-react-router';
import { get, post } from '../../utils/httpRequest/httpMethods';

export function groupGetAll() {
  return dispatch =>
    get('/group')
      .then(res => {
        dispatch({
          type: 'GROUP_LIST',
          payload: res.data
        });
      })
      .catch(err => err);
}

export function groupGetById(groupId) {
  return dispatch =>
    get(`/group/${groupId}`)
      .then(res => {
        dispatch(initialize('group', { ...res.data })); // Fill form
        dispatch({
          type: 'GROUP_CURRENT_INFO',
          payload: res.data
        });
      })
      .catch(err => err);
}

export function removeUserFromGroup(userId) {
  return dispatch =>
    dispatch({
      type: 'GROUP_USER_REMOVE_BY_ID',
      payload: userId
    });
}

export function addUserToGroup(userId) {
  return dispatch =>
    dispatch({
      type: 'GROUP_USER_ADD_BY_ID',
      payload: userId
    });
}
/*

export function userRegister(email, password, codewarsId) {
  return dispatch =>
    post('/user', {
      email,
      password,
      codewarsId
    })
      .then(res => {
        dispatch({
          type: 'USER_REGISTER',
          payload: res.data
        });
        dispatch(push('/user/login'));
      })
      .catch(err => err);
}


export function userGetCurrent(userId) {
  return dispatch =>
    get(`/user/${userId}`)
      .then(res => {
        dispatch({
          type: 'USER_CURRENT_INFO',
          payload: res.data
        });
      })
      .catch(err => err);
}

export function userGetAuthUserInfo(userId) {
  return dispatch =>
    get(`/user/${userId}`)
      .then(res => {
        dispatch({
          type: 'USER_AUTHORIZED_INFO',
          payload: res.data
        });
      })
      .catch(err => err);
}

export function userLogin(email, password) {
  return dispatch =>
    post('/user/login', {
      email,
      password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        return res;
      })
      .then(res => {
        dispatch(userGetAuthUserInfo(res.data.userId));
        return res.data.userId;
      })
      .then(userId => {
        dispatch(push(`/user/${userId}`));
      })
      .catch(err => err);
}

export function userLogout() {
  return dispatch => {
    // dispatch(push('/'));
    dispatch({
      type: 'USER_LOGOUT'
    });
    localStorage.clear();
  };
}
*/
