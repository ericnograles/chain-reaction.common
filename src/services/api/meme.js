import { APIConstants } from '../../constants';

/**
 * Logs into the system
 * @param email
 * @param password
 * @returns {Promise}
 */
export function find() {
  return new Promise(
    (resolve, reject) => {
      var url = APIConstants.SERVER() + APIConstants.ROUTES.MEME.FIND;
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (!response.ok) {
          throw {error: 'Server error encountered'};
        }
        return response.text();
      }).then((responseText) => {
        var memes = JSON.parse(responseText).memes;
        resolve(memes);
      }).catch((error) => {
        reject(error);
      })
    }
  );
}