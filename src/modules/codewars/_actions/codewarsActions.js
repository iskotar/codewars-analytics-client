import { get, post } from '../../utils/httpRequest/httpMethods';

export function checkCodewarsUser(codewarsId) {
  return dispatch =>
    get(`/user/read/cw/${codewarsId}`).then(res => {
      console.log(res);
      dispatch({
        type: 'CODEWARS_INFO',
        payload: res.data
      });
    });
}
