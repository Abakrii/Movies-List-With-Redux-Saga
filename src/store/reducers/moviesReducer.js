import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED
} from '../actions/actionTypes';

export const MovieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.recivedMovies;

    case FETCH_FAILED:
      return [];
    // case ADD_MOVIE:
    //   return [...movies, action.newMovie];

    // case UPDATE_MOVIE:
    //   return movies;

    case UPDATE_SUCCEEDED:
      return movies.map(eachMovie=>
        (eachMovie.id.toString() === action.updateMovie.id) ? 
        {...eachMovie,
          name: action.updateMovie.name,
          releaseYear: action.updateMovie.releaseYear
  
        }
         : eachMovie
      )
      case DELETE_SUCCEEDED:
        const filteredMovies = movies.filter(eachMovie=>{
          return eachMovie.id.toString() !== action.deleteMovieId.toString();
        })
        return filteredMovies;

    default:
      return movies;
  }
};
