/* original Copyright Brett Ritter, 2021.  Available for use, modification, and redistribution under the terms of the MIT License */

// const BASE = `http://localhost:5000/`;
const BASE = `http://101.43.61.57:5000/`;

export const MESSAGES = {
    networkError: 'Trouble connecting to the network.  Please try again',
    default: 'Something went wrong.  Please try again',
};

export function fetchRecords() {
  return fetch(`${BASE}api/records`)
  .catch( () => Promise.reject({ error: 'networkError' }) )
  .then( response => {
    if (response.ok) {
      return response.json();
    }
    return response.json()
    .catch( error => Promise.reject({ error }) )
    .then( err => Promise.reject(err) );
  });
}

export function fetchAddRecord(name, email, fastest, avg, type) {
  return fetch(`${BASE}api/records`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify( { name, email, fastest, avg, type } ),
  })
  .catch( () => Promise.reject({ error: 'networkError' }) )
  .then( response => {
    if (response.ok) {
      return response.json();
    }
    return response.json()
    .catch( error => Promise.reject({ error }) )
    .then( err => Promise.reject(err) );
  });
}

