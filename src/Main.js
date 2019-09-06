/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {connect} from 'react-redux';
import MovieComponent from './components/MovieComponent';
import {
  fetchMoviesAction,
  addMovieAction,
  fetchSuccessAction,
  fetchFailedAction,
} from './store/actions';

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAction());
    },
    onAddMovie: (newMovie) => {
      dispatch(addMovieAction(newMovie));
    },
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);

export default Main;
