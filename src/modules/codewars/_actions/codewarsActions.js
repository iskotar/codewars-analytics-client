import { change } from 'redux-form';
import { get } from '../../utils/httpRequest/httpMethods';

export function codewarsCheckUser(codewarsId) {
  return dispatch =>
    get(`/user/read/cw/${codewarsId}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: 'CODEWARS_INFO',
            payload: res.data
          });
          return res.data;
        } else {
          throw Error('Codewars error');
        }
      })
      .catch(err => {
        dispatch(change('codewarsChecker', 'codewarsLink', ''));
      });
}

export function codewarsRequestUpdates() {
  return dispatch =>
    get(`/user/update/cw/${localStorage.getItem('userId')}`).then(res => {
      dispatch({
        type: 'CODEWARS_INFO',
        payload: res.data
      });
    });
}
