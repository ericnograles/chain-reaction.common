'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _user = require('./user');

var rootReducer = (0, _redux.combineReducers)({
  email: _user.email,
  password: _user.password,
  user: _user.user
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map