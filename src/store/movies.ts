import {
  createSlice,
  PayloadAction,
  createSelector,
  current,
} from '@reduxjs/toolkit';
import { RootState } from '.';

interface Movie {
  id: number;
  vote_average: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  runtime: number;
}
interface Movies {
  movies: Array<Movie>;
  searchedMovies: Array<Movie>;
  selectedMovie: Movie;
  searchQuery: string;
  currentMoviePage: number;
  currentSearchPage: number;
}

const movieInitialState: Movie = {
  id: -1,
  vote_average: 0,
  title: '',
  overview: '',
  release_date: '',
  poster_path: '',
  runtime: 0,
};

const initialState: Movies = {
  movies: [],
  searchedMovies: [],
  selectedMovie: movieInitialState,
  searchQuery: '',
  currentMoviePage: 1,
  currentSearchPage: 1,
};

export const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<any>) => {
      // do nothing
    },
    searchMovies: (state, action: PayloadAction<any>) => {
      state.searchQuery = action.payload.query;
      if (action.payload.currentSearchPage === 1) state.searchedMovies = [];
    },
    setMovies: (state, action: PayloadAction<any>) => {
      state.movies = [...current(state.movies), ...action.payload];
    },
    setSearchedMovies: (state, action: PayloadAction<any>) => {
      state.searchedMovies = [
        ...current(state.searchedMovies),
        ...action.payload,
      ];
    },
    getSelectedMovieDetail: (state, action: PayloadAction<any>) => {
      state.selectedMovie = movieInitialState;
      // do nothing
    },
    setSelectedMovie: (state, action: PayloadAction<any>) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = movieInitialState;
    },
    setMoviesPage: (state, action: PayloadAction<any>) => {
      state.currentMoviePage = action.payload.currentMoviePage;
    },
    setSearchPage: (state, action: PayloadAction<any>) => {
      state.currentSearchPage = action.payload.currentSearchPage;
    },
  },
});

export const { reducer, actions } = slice;

export const selectMoviesStore = (state: RootState) => state.movies;
export const selectMovies = createSelector(
  selectMoviesStore,
  (state) => state.movies
);
export const getSelectedMovie = createSelector(
  selectMoviesStore,
  (state) => state.selectedMovie
);
export const getSearchedMovies = createSelector(
  selectMoviesStore,
  (state) => state.searchedMovies
);
export const getSearchQuery = createSelector(
  selectMoviesStore,
  (state) => state.searchQuery
);
export const getSearchPage = createSelector(
  selectMoviesStore,
  (state) => state.currentSearchPage
);
export const getMoviesPage = createSelector(
  selectMoviesStore,
  (state) => state.currentMoviePage
);
