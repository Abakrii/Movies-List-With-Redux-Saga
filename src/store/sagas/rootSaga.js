import { fork} from 'redux-saga/effects'
import {watchFetchMovies, watchPostMovies , watchUpdateMovies ,watchDeleteMovies} from './movieSagas'




export default function* rootSaga() {
   yield fork(watchFetchMovies),
   yield fork(watchPostMovies),
   yield fork(watchUpdateMovies)
  // yield fork(watchDeleteMovies)
}

