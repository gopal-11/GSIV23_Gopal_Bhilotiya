import { useEffect, FC } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';

import {
  actions,
  selectMovies,
  getSearchQuery,
  getSearchedMovies,
  getSearchPage,
  getMoviesPage,
} from '../../store/movies';

const Home: FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);
  const moviesStore = useSelector(selectMovies);
  const searchedMovies = useSelector(getSearchedMovies);
  const currentMoviePage = useSelector(getMoviesPage);
  const currentSearchPage = useSelector(getSearchPage);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (searchQuery) {
        dispatch(
          actions.setSearchPage({ currentSearchPage: currentSearchPage + 1 })
        );
      } else {
        dispatch(
          actions.setMoviesPage({ currentMoviePage: currentMoviePage + 1 })
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    dispatch(actions.load({ currentMoviePage }));
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, [currentMoviePage]);

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    dispatch(
      actions.searchMovies({
        query: searchQuery,
        currentSearchPage: currentSearchPage + 1,
      })
    );
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, [currentSearchPage]);

  return (
    <div>
      <div className="card_container">
        {(searchQuery === '' ? moviesStore : searchedMovies)?.map(
          (movie, index) => (
            <MovieCard movie={movie} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
