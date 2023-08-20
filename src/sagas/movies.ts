/* eslint-disable import/no-cycle */
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getMoviesSearch,
  getMoviesService,
  getMovieDetailService,
} from '../services/movies';
import { actions } from '../store/movies';

function* getMoviesSaga(action: any): Generator {
  try {
    const res: any = yield call(getMoviesService, action.payload);
    yield put(actions.setMovies(res.data.results));
  } catch (err: any) {}
}

function* getSearchMoviesSaga(action: any): Generator {
  try {
    const res: any = yield call(getMoviesSearch, action.payload);
    yield put(actions.setSearchedMovies(res.data.results));
  } catch (err: any) {}
}

function* getSelectedMovieDetailSaga(action: any): Generator {
  try {
    console.log(action.payload);
    const res: any = yield call(getMovieDetailService, action.payload);
    console.log(res.data);
    yield put(actions.setSelectedMovie(res.data));
  } catch (err: any) {
    console.log(err);
  }
}

// single entry point to start all Sagas at once
export default function* moviesSaga() {
  yield takeEvery(actions.load, getMoviesSaga);
  yield takeEvery(actions.searchMovies, getSearchMoviesSaga);
  yield takeEvery(actions.getSelectedMovieDetail, getSelectedMovieDetailSaga);
}
