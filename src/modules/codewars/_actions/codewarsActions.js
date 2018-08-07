import { change, initialize } from 'redux-form';
import { get, post } from '../../utils/httpRequest/httpMethods';

export function checkCodewarsUser(codewarsId) {
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
