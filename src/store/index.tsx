import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { reducer as moviesReducer } from './movies';

import rootSagas from '../sagas';

const combinedReducer = combineReducers({
  movies: moviesReducer,
});

const rootReducer = (state: any, action: { type: string }) => {
  let temp = state;
  if (action.type === 'session/clearSession') {
    temp = undefined;
  }
  return combinedReducer(temp, action);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;

// store.subscribe(() => saveToSessionStorage(store.getState()));
sagaMiddleware.run(rootSagas);
