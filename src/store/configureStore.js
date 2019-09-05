import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {MovieReducer} from './reducers';
import rootSaga from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({moviesReducer: MovieReducer});

const configureStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);


export default configureStore;