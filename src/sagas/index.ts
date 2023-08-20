/* eslint-disable import/no-cycle */
import { put, spawn } from 'redux-saga/effects';
// import { isPlainObject } from '@mui/utils';

import moviesSaga from './movies';
// import { actions as notifierActions } from '../store/notifications';

export function* globalErrorHandler(
  error?: any,
  actions?: any,
  status?: any
): Generator {
//   yield put(
//     notifierActions.addError(
//       isPlainObject(error) ? (error?.message as string) : JSON.stringify(error)
//     )
//   );
  if (status && actions) yield put(actions.setStatus(status));
}

export default function* rootSagas() {
  yield spawn(moviesSaga);
 
}
