'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT = exports.RECEIVE_LOGIN = exports.REQUEST_LOGIN = exports.KEYPRESS_PASSWORD = exports.KEYPRESS_EMAIL = undefined;
exports.keyPressEmail = keyPressEmail;
exports.keyPressPassword = keyPressPassword;
exports.requestLogin = requestLogin;
exports.receiveLogin = receiveLogin;
exports.login = login;
exports.logout = logout;

var _api = require('../services/api');

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var KEYPRESS_EMAIL = exports.KEYPRESS_EMAIL = 'KEYPRESS_EMAIL';
var KEYPRESS_PASSWORD = exports.KEYPRESS_PASSWORD = 'KEYPRESS_PASSWORD';
var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECEIVE_LOGIN = exports.RECEIVE_LOGIN = 'RECEIVE_LOGIN';
var LOGOUT = exports.LOGOUT = 'LOGOUT';

function keyPressEmail(email) {
  return {
    type: KEYPRESS_EMAIL,
    email: email
  };
}

function keyPressPassword(password) {
  return {
    type: KEYPRESS_PASSWORD,
    password: password
  };
}

function requestLogin(email) {
  return {
    type: REQUEST_LOGIN,
    email: email
  };
}

function receiveLogin(email, response) {
  return {
    type: RECEIVE_LOGIN,
    email: email,
    profile: response.data,
    error: response.error
  };
}

function login(email, password) {
  return function (dispatch) {
    dispatch(requestLogin(email));
    return API.UserService.login(email, password).then(function (json) {
      return dispatch(receiveLogin(email, { data: json }));
    }).catch(function (error) {
      return dispatch(receiveLogin(email, { error: error }));
    });
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}
//# sourceMappingURL=index.js.map