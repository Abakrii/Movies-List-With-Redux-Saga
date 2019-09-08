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
  updateItemAction,
  updateItemSuccessAction,
  deleteItemAction,
  deleteItemSuccessAction
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
    onUpdateItemAction: (updateMovie) => {
      dispatch(updateItemAction(updateMovie))
    },
    // onUpdateItemSuccessAction: (updateMovie) => {
    //   dispatch(updateItemSuccessAction(updateMovie))
    // }
    onDeleteItemAction: (deletedMoiveId) =>{
      dispatch(deleteItemAction(deletedMoiveId));
    }
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);

export default Main;
