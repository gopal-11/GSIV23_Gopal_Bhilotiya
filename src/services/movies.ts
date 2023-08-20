import axios from 'axios';

export const getMoviesService = async (data: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f0252665545f512bcbfce466484d397a&sort_by=primary_release_date.desc&page=${data.currentMoviePage}`
  );

  return response;
};

export const getMoviesSearch = async (data: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=f0252665545f512bcbfce466484d397a&sort_by=primary_release_date.desc&query=${data.query}&include_adult=false&language=en-US&page=${data.currentSearchPage}`
  );
  return response;
};

export const getMovieDetailService = async (data: any) => {
  console.log(data);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data.id}?api_key=f0252665545f512bcbfce466484d397a`
  );
  return response;
};
