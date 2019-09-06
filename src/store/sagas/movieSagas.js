import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
} from '../actions/actionTypes';

//saga effects

import {put, takeLatest} from 'redux-saga/effects';

import {Api} from './Api';

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