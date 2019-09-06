import { fork} from 'redux-saga/effects'
import {watchFetchMovies, watchPostMovies} from './movieSagas'




export default function* rootSaga() {
   yield fork(watchFetchMovies),
   yield fork(watchPostMovies)
}

