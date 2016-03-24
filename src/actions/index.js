import fetch from 'isomorphic-fetch';
import * as API from '../services/api';

export const KEYPRESS_EMAIL = 'KEYPRESS_EMAIL';
export const KEYPRESS_PASSWORD = 'KEYPRESS_PASSWORD';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function keyPressEmail(email) {
  return {
    type: KEYPRESS_EMAIL,
    email
  };
}

export function keyPressPassword(password) {
  return {
    type: KEYPRESS_PASSWORD,
    password
  }
}

export function requestLogin(email) {
  return {
    type: REQUEST_LOGIN,
    email: email
  };
}

export function receiveLogin(email, response) {
  return {
    type: RECEIVE_LOGIN,
    email: email,
    profile: response.data,
    error: response.error
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin(email));
    return API.UserService.login(email, password)
      .then(json => dispatch(receiveLogin(email, {data: json})))
      .catch(error => dispatch(receiveLogin(email, {error: error})));
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}