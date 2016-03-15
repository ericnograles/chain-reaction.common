'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.password = password;
exports.user = user;

var _actions = require('../actions');

var _InitialStates = require('../constants/InitialStates');

var InitialStates = _interopRequireWildcard(_InitialStates);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// TODO: Not sure if this is even necessary

function email() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.KEYPRESS_EMAIL:
      return action.email;
    default:
      return state;
  }
}

function password() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.KEYPRESS_PASSWORD:
      return action.password;
    default:
      return state;
  }
}

function user() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? InitialStates.user : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        status: 'authenticating'
      });
    case _actions.RECEIVE_LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        profile: action.profile,
        error: action.error,
        status: action.error ? 'unauthenticated' : 'authenticated'
      });
    case _actions.LOGOUT:
      return Object.assign({}, state, {
        email: null,
        profile: null
      });
    default:
      return state;
  }
}
//# sourceMappingURL=user.js.map