import {ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from './actionTypes';

//Actions By User
export const fetchMoviesAction = sort => {
    return {
        type: FETCH_MOVIES,
        sort,
    }
};


export const addMovieAction = newMovie => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
};


//Actions Send by Redux Saaga

// export const fetchSuccessAction = reciveNewMovie => {
//     return {
//         type: FETCH_SUCCEEDED,
//         reciveNewMovie,
//     }
// }

// export const fetchFailedAction = error => {
//     return {
//         type: FETCH_FAILED,
//         error,
//     }
// }