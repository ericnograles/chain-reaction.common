'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(email, password) {
  return new Promise(function (resolve, reject) {
    var ref = new _firebase2.default('https://gainsville.firebaseio.com');
    ref.authWithPassword({
      email: email,
      password: password
    }, function (err, userData) {
      if (err) {
        if (err.code === 'INVALID_USER') {
          ref.createUser({
            email: self.state.email,
            password: self.state.password
          }, function (error, userData) {
            if (error) {
              return reject(error.message);
            } else {
              return resolve(userData);
            }
          });
        } else {
          return reject(err);
        }
      } else {
        return resolve(userData);
      }
    });
  });
}
//# sourceMappingURL=index.js.map