import {ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED , UPDATE_SUCCEEDED, UPDATE_MOVIE , DELETE_MOVE, DELETE_SUCCEEDED} from './actionTypes';

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

export const fetchSuccessAction = reciveNewMovie => {
    return {
        type: FETCH_SUCCEEDED,
        reciveNewMovie,
    }
}

export const fetchFailedAction = error => {
    return {
        type: FETCH_FAILED,
        error,
    }
}


//Update Exting Movie
export const updateItemAction = (updateMovie) =>{
    return {
        type: UPDATE_MOVIE,
        updateMovie
    }
}

//Action Send By Redux Saga 
export const updateItemSuccessAction = (updateMovie) =>{
    return {
        type: UPDATE_SUCCEEDED,
        updateMovie
    }
}


export const deleteItemAction = (deletedMovieId) =>{
    return{
        type: DELETE_MOVIE,
        deletedMovieId
    }
}

//ACTION SENT BY REDUX SAGA
export const deleteItemSuccessAction = (deletedMovieId) =>{
    return{
        type: DELETE_SUCCEEDED,
        deletedMovieId
    }
}