import {ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from '../actions/actionTypes';


export const MovieReducer = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action;
            
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            return [
                ...movies,
                action.newMovie
            ];   
            
        
    
        default:
            return movies;
    }
}

