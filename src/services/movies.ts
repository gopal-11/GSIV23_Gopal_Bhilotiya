/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */

import axios from "axios";




export const getMoviesService = async (data:any) => {
  // for detail 
  // https://api.themoviedb.org/3/movie/615656?api_key=f0252665545f512bcbfce466484d397a
 
  // "https://api.themoviedb.org/3/movie/739405?language=en-US&api_key=f0252665545f512bcbfce466484d397a"
  // "https://api.themoviedb.org/3/movie/upcoming?api_key=f0252665545f512bcbfce466484d397a&page=2"
  // const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=f0252665545f512bcbfce466484d397a&sort_by=primary_release_date.desc&region=US&page=${data.page}`);
  const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=f0252665545f512bcbfce466484d397a&sort_by=primary_release_date.desc&page=${data.page}`);
 
//   if (response.code) {
//     return Promise.reject(response);
//   }
  return response;
};

export const getMoviesSearch = async (data:any) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f0252665545f512bcbfce466484d397a&query=${data.query}&include_adult=false&language=en-US&page=1`);
  return response;
};
