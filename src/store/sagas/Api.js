//json-server --host 192.168.8.100 db.json // my wifi
// json-server --host 10.168.20.146 db.json // mu uni
//json-server --host 192.168.8.102 db.json // hakawati
const getMoviesUrl = 'http://192.168.8.102:3000/movies';
const postMovieUrl = 'http://192.168.8.102:3000/movies';

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



function* postMoviesToApi(newMovie){
  console.log('GGG' , newMovie);
  const request = yield axios.post(postMovieUrl,{
    name: newMovie.name,
    releaseYear: newMovie.releaseYear
  })
  console.log('request' , request)
  console.log('new Moiveee' , newMovie)
  const newMovies = yield request.data;
  return newMovies;
}



export const Api = {
  getMoviesFromApi,
  postMoviesToApi
};
