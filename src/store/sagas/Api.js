//json-server --host 192.168.8.100 db.json
// json-server --host 10.168.20.146 db.json
const getMoviesUrl = 'http://10.168.20.146:3000/movies';

import axios from 'axios';

function* getMoviesFromApi() {
  const response = yield axios.get(getMoviesUrl, {
    headers: {
      'content-type': 'application/json',
    },
  });

  console.log('res', response);
  const movies = yield response.status === 200 ? response.data : [];
  console.log('movies', movies);
  return movies;
}

export const Api = {
  getMoviesFromApi,
};
