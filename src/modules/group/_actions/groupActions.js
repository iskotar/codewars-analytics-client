import { initialize, reset } from 'redux-form';
import { push } from 'connected-react-router';
import { get, post, patch } from '../../utils/httpRequest/httpMethods';

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

export function groupUpdateById(groupId, groupForm) {
  return dispatch =>
    patch(`/group/${groupId}`, groupForm)
      .then(() => {
        dispatch(push('/groups')); // Redirect
        dispatch(reset('group')); // Clear form
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
