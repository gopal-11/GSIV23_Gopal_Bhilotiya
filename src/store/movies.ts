/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector,current } from '@reduxjs/toolkit';
import { RootState } from '.';

interface Movie{
  id:number;
  vote_average:number;
  title:string;
  overview:string;
  release_date:string;
  poster_path:string;
}
interface Movies {
 movies:Array<Movie>;
 selectedMovie:Movie; 
}

const movieInitialState:Movie={
  id:-1,
  vote_average:0,
  title:"",
  overview:"",
  release_date:"",
  poster_path:""}

const initialState: Movies = {
  movies:[],
  selectedMovie:movieInitialState
};

export const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    load:(state, action: PayloadAction<any>)=>{
      // do nothing
    },
    searchMovies:(state, action: PayloadAction<any>)=>{
      // do nothing
    },
    setMovies: (state, action: PayloadAction<any>) => {
      state.movies = [...current(state.movies),...action.payload];
    },
    setSearchedMovies:(state, action: PayloadAction<any>) => {
      state.movies = [...current(state.movies),...action.payload];
    },
    setSelectedMovie: (state, action: PayloadAction<any>) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie:(state) => {
      state.selectedMovie = movieInitialState;
    },
  },
});

export const { reducer, actions } = slice;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMoviesStore = (state: RootState) => state.movies;
export const selectMovies = createSelector(selectMoviesStore, (state) => state.movies);
export const getSelectedMovie = createSelector(selectMoviesStore, (state) => state.selectedMovie);
