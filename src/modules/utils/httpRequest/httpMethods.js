import axios from 'axios';
import _ from 'lodash';
import Notifications from 'react-notification-system-redux';
import store from '../../../redux/store';

import { warningAdd, warningRemove } from '../warning/_actions/warningActions';
import { push } from 'connected-react-router';

function getHeaders(type) {
  return {
    Authorization: _.isEmpty(localStorage.getItem('token'))
      ? ''
      : `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': type
  };
}

const server =
  process.env.REACT_APP_ENV === 'production'
    ? process.env.REACT_APP_HOST_API_SERVER_PROD
    : process.env.REACT_APP_HOST_API_SERVER_DEV;

function httpMethod(method, url, data, type = 'application/json') {
  return axios({
    method,
    url: server + url,
    data,
    headers: getHeaders(type)
  })
    .then(res => {
      // If response has message
      if (_.has(res.data, 'message.text')) {
        store.dispatch(Notifications.removeAll()); // Removes all notifications
        store.dispatch(
          Notifications.success({
            title: res.data.message.text,
            autoDismiss: 0,
            position: 'br'
          })
        );
      }

      // Remove warning 500
      if (res.status === 200) {
        store.dispatch(warningRemove('500'));
      }

      return res;
    })
    .catch(error => {
      if (error.message === 'Network Error') {
        store.dispatch(
          Notifications.error({
            title: error.message,
            autoDismiss: 0,
            position: 'br'
          })
        );
      }

      if (error.response) {
        if (_.has(error.response, 'data.message.text')) {
          store.dispatch(
            Notifications.error({
              title: error.response.data.message.text,
              autoDismiss: 0,
              position: 'br'
            })
          );

          // Fix failed autologin
          if (error.response.data.message.text === 'Auth failed') {
            store.dispatch(push(`/user/login`));
            localStorage.clear();
          }
        } else if (error.response.status === 500) {
          store.dispatch(warningAdd('500'));
        } else {
          console.log('ERROR RESPONSE', error.response);
        }
      }
      throw new Error('ERROR http');
    });
}

export function get(url, data) {
  return httpMethod('get', url, data);
}

export function post(url, data, type) {
  return httpMethod('post', url, data, type);
}

export function patch(url, data, type) {
  return httpMethod('patch', url, data, type);
}

export function del(url, data) {
  return httpMethod('delete', url, data);
}
