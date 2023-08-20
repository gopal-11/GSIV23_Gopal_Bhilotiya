import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMoviesService = async (data: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&sort_by=primary_release_date.desc&page=${data.currentMoviePage}`
  );

  return response;
};

export const getMoviesSearch = async (data: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc&query=${data.query}&include_adult=false&language=en-US&page=${data.currentSearchPage}`
  );
  return response;
};

export const getMovieDetailService = async (data: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data.id}?api_key=${API_KEY}`
  );
  return response;
};
