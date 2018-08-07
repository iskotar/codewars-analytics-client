import { change, initialize } from 'redux-form';
import { get, post } from '../../utils/httpRequest/httpMethods';

export function checkCodewarsUser(codewarsId) {
  return dispatch =>
    get(`/user/read/cw/${codewarsId}`)
      .then(res => {
        dispatch({
          type: 'CODEWARS_INFO',
          payload: res.data
        });
        return res.data;
      })
      .then(data => {
        dispatch(change('userRegister', 'codewarsLink', data.username));
      });
}
