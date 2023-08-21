import { spawn } from 'redux-saga/effects';
import moviesSaga from './movies';

export default function* rootSagas() {
  yield spawn(moviesSaga);
}
