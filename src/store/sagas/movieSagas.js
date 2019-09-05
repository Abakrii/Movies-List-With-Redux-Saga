import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
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
