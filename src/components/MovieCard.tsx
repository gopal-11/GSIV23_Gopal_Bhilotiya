
import { Icon } from "@mui/material";
import { SearchOutlined, HomeOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import {
  actions,
} from '../store/movies';
import { hover } from "@testing-library/user-event/dist/hover";

interface Props {
   movie:any
  }

export default function MovieCard(props:Props) {
    const {movie}=props;
  const goto = useNavigate();
  const dispatch=useDispatch()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // padding: "10px",
      
        width: "280px",
        // height:"400px",
        boxShadow: "0 3px 10px 0 black",
        cursor: "pointer",
        borderRadius: "4px",
        paddingBottom: "10px",
        
      }}
      onClick={() =>{ 
       dispatch(actions.setSelectedMovie(movie)) 
        goto("/detail")}}
    >
      
      <img
        src={`https://image.tmdb.org/t/p/original${movie["poster_path"]}`}
        style={{
          objectFit: "cover",
          height: "80%",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px"
        }}
        alt={movie.title}
      />
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          height:"20%"
        }}
      >
        <span>{movie.title}</span>
        <span style={{ opacity: 0.6 }}>{movie.vote_average}</span>
      </div>
      <span
        style={{
          display: "flex",
          padding: "0px 10px",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          opacity: 0.8,
         whiteSpace:"nowrap"
  
         
  
 
        }}
      >
        {movie.overview}
      </span>
    </div>
  );
}
