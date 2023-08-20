/* eslint-disable import/no-cycle */
import { call, delay, put, takeEvery } from 'redux-saga/effects';
import {
  getMoviesSearch,
  getMoviesService,
  
} from '../services/movies';
import { actions } from '../store/movies';
import { globalErrorHandler } from '.';

function* getMoviesSaga(action: any): Generator {
  try{
   
    const res:any = yield call(getMoviesService,action.payload)
    yield put(
      actions.setMovies(
      res.data.results
      )
    );
  }catch{

  }
}

function* getSearchMoviesSaga(action: any): Generator {
  try{
   
    const res:any = yield call(getMoviesSearch,action.payload)
    yield put(
      actions.setSearchedMovies(
      res.data.results
      )
    );
  }catch{

  }
}




// single entry point to start all Sagas at once
export default function* moviesSaga() {
  yield takeEvery(actions.load, getMoviesSaga);
  yield takeEvery(actions.searchMovies, getSearchMoviesSaga);
 
}
