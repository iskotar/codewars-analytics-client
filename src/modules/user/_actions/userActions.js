import { push } from 'connected-react-router';
import { get, post } from '../../utils/httpRequest/httpMethods';

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

export function userGetById(userId) {
  return dispatch =>
    get(`/user/${userId}`)
      .then(res => {
        dispatch({
          type: 'AUTH_USER_INFO',
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
        dispatch(userGetById(res.data.userId));
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
