import { push } from 'connected-react-router';
import { get, post } from '../../utils/httpRequest/httpMethods';

export function userRegister(email, password, codewarsId, name, phone) {
  return dispatch =>
    post('/user', {
      email,
      password,
      codewarsId,
      name,
      phone
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

export function userGetAll() {
  return dispatch =>
    get('/user')
      .then(res => {
        dispatch({
          type: 'USER_LIST',
          payload: res.data
        });
      })
      .catch(err => err);
}

export function userGetAllLightweight() {
  return dispatch =>
    get('/user/lightweight')
      .then(res => {
        dispatch({
          type: 'USER_LIST_LIGHTWEIGHT',
          payload: res.data
        });
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

export function userACL(acl) {
  return dispatch =>
    dispatch({
      type: 'USER_ACL',
      payload: acl
    });
}

export function userFillAuthUserInfo(user) {
  return dispatch =>
    dispatch({
      type: 'USER_AUTHORIZED_INFO',
      payload: user
    });
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
        dispatch(userFillAuthUserInfo(res.data.user));
        dispatch(userACL(res.data.acl));
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
