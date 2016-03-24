import { APIConstants } from '../../constants';

/**
 * Logs into the system
 * @param email
 * @param password
 * @returns {Promise}
 */
export function login(email, password) {
  return new Promise(
    (resolve, reject) => {
      var url = APIConstants.SERVER + APIConstants.ROUTES.USER.LOGIN;
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
      }).then((response) => {
        if (!response.ok) {
          throw {error: 'Server error encountered'};
        }
        return response.text();
      }).then((responseText) => {
        var profile = JSON.parse(responseText);
        resolve(profile);
      }).catch((error) => {
        reject(error);
      })
    }
  );
}