'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = undefined;

var _constants = require('../constants');

var user = exports.user = {

  /**
   * Logs into the system
   * @param email
   * @param password
   * @returns {Promise}
   */
  login: function login(email, password) {
    return new Promise(function (resolve, reject) {
      var url = _constants.APIConstants.SERVER + _constants.APIConstants.USER.LOGIN;
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(function (response) {
        if (!response.ok) {
          throw { error: 'Server error encountered' };
        }
        return response.text();
      }).then(function (responseText) {
        var profile = JSON.parse(responseText);
        resolve(profile);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};
//# sourceMappingURL=user.js.map