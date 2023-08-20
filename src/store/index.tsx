/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { reducer as moviesReducer } from './movies';


import rootSagas from '../sagas';


// convert object to string and store in localStorage
// todo add debounce
// todo maybe only save session payload
// todo maybe encrypt
function saveToSessionStorage(state: any) {
  try {
    // const copiedState = { ...state };
    // delete copiedState.deliveryZone;
    // const serializedState = JSON.stringify(copiedState);
    // sessionStorage.setItem(STORAGE_KEY, serializedState);
  } catch {}
}

// load string from localStorage and convert into an Object
// invalid output must be undefined
function loadFromSessionStorage() {
  try {
    // const serializedState = sessionStorage.getItem(STORAGE_KEY);
    // if (serializedState === null) return undefined;
    // const parsedSession = JSON.parse(serializedState);
    // const userDetailInStore = localStorage.getItem('user');
    // if (userDetailInStore) {
    //   parsedSession.session.user = JSON.parse(userDetailInStore);
    // }
    // return parsedSession;
  } catch (e) {
    return undefined;
  }
}

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
const isDebugModeOn = false;

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware:  [sagaMiddleware],
//   preloadedState: loadFromSessionStorage(),
});
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => saveToSessionStorage(store.getState()));
sagaMiddleware.run(rootSagas);
