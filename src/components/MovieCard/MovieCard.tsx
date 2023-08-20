import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/movies';
import './index.css';

interface Props {
  movie: any;
}

const MovieCard: FC<Props> = (props) => {
  const { movie } = props;
  const goto = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   width: '280px',
      //   boxShadow: '0 3px 10px 0 black',
      //   cursor: 'pointer',
      //   borderRadius: '4px',
      //   paddingBottom: '10px',
      // }}
      className="card"
      onClick={() => {
        dispatch(actions.getSelectedMovieDetail({ id: movie.id }));
        goto('/detail');
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`}
        // style={{
        //   height: '200px',
        //   borderTopLeftRadius: '4px',
        //   borderTopRightRadius: '4px',
        // }}
        className="card_image"
        alt={movie.title}
      />

      <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   alignItems: 'center',
        //   padding: '10px',
        // }}
        className="card_detail_container"
      >
        <span className="movie_title">{movie.title}</span>
        <span
          // style={{ color: '#FBBC04', fontWeight: 700, fontSize: '16px' }}
          className="rating"
        >
          {movie.vote_average}
        </span>
      </div>
      <div>
        <span
          className="description"
          // style={{
          //   display: "flex",
          //   padding: "0px 10px",
          //   WebkitBoxOrient: "vertical",
          //   WebkitLineClamp: 2,
          //   overflow: "hidden",
          //   textOverflow: "ellipsis",
          //   opacity: 0.8,
          //  whiteSpace:"nowrap"
          // }}
        >
          {movie.overview}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
