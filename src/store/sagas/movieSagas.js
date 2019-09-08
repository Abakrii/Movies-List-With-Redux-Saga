import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED  

} from '../actions/actionTypes';

//saga effects

import {put, takeLatest} from 'redux-saga/effects';

import {Api} from './Api';

//GET MOVIES
function* fetchMovies() {
  try {
    const recivedMovies = yield Api.getMoviesFromApi();
    console.log('ts', recivedMovies);
    yield put({type: FETCH_SUCCEEDED, recivedMovies});
  } catch (error) {
    yield put({type: FETCH_FAILED, error});

    console.log('error', error);
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

// POST NEW MOIVES
function* postNewMovie(action) {
    console.log('action', action )
  try {
    const result = yield Api.postMoviesToApi(action.newMovie);
    console.log('the result', result);
    if (result === true) {
      yield put({type: FETCH_MOVIES, sort: 'desc'});
    }
  } catch (error) {
    console.log('error', error);
  }
}



export function* watchPostMovies(){
    yield takeLatest(ADD_MOVIE, postNewMovie);
}


//UPDATE MOVE

function* updateMovie(action){
  try{
    const result = yield Api.updateMoviesApi(action.updateMovie);
    if(result === true){
      yield put({type: UPDATE_SUCCEEDED, updateMovie: action.updateMovie}); 
    }
  }catch(error){

  }
}


export function* watchUpdateMovies(){
  yield takeLatest(UPDATE_MOVIE, updateMovie);
}




function* deleteMoive (action) {
  try{
    const result = yield Api.deleteMovieFromApi(action.deleteMoiveId);
    if(result === true){
      yield put({type: DELETE_SUCCEEDED, deleteMoiveId: action.deleteMoiveId}); 
    }
  }catch(error){

  }
}

export function* watchDeleteMovies(){
  yield takeLatest(DELETE_MOVIE, deleteMoive);
}