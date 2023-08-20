import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux';
import {
  getSelectedMovie
} from '../store/movies';

export default function MovieDetail() {
  const goto = useNavigate();
  const movieDetail=useSelector(getSelectedMovie);
  // console.log(movieDetail)

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px 10px" }}>
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetail["poster_path"]}`}
        // src="https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg"
        style={{
          objectFit: "cover",
          width: "150px",
          height: "200px"
        }}
        alt={movieDetail.title}
      />
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "black",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textTransform: "capitalize",
            textOverflow: "ellipsis"
          }}
        >
          <span>{movieDetail.title}</span>
        </span>
        <span>Year|Lenght|Director</span>
        <span>Cast: Actor1,Actor2,...</span>
        <span>
          Descripion: {movieDetail.overview}
        </span>
      </div>
    </div>
  );
}
