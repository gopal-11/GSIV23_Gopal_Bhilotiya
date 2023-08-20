import { useEffect, useState } from "react";
import { SearchOutlined, HomeOutlined } from "@mui/icons-material";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
    actions,
    selectMovies
  } from '../store/movies';

export default function Home() {
 
  const goto=useNavigate();
  const dispatch = useDispatch();
  const moviesStore = useSelector(selectMovies);
  const [page,setPage] = useState(1)
//   const fetchData = async () => {
//     const res = await axios.get(
//       "https://api.themoviedb.org/3/movie/upcoming?api_key=f0252665545f512bcbfce466484d397a"
//     );

//     setMovies(res.data.results);
//   };

const handleInfiniteScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop + 1 >=
    document.documentElement.scrollHeight
  ) {
   
    setPage((prev) => prev + 1);
  }
};

  useEffect(() => {
    // fetchData();
    // dispatch(actions.load({page:1}))
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(()=>{
     dispatch(actions.load({page}))
     console.log("use",page)
  },[page])
  console.log(page);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px",
          gap: "25px",
          justifyContent: "space-evenly",
          // overflow:"scroll"
        }}
      >
        {moviesStore?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}
