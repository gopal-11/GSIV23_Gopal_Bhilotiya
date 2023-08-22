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
      className="card"
      onClick={() => {
        dispatch(actions.getSelectedMovieDetail({ id: movie.id }));
        goto('/detail');
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`}
        className="card_image"
        alt={movie.title}
      />

      <div className="card_detail_container">
        <span className="movie_title">{movie.title}</span>
        <span className="rating">{movie.vote_average}</span>
      </div>
      <div>
        <span className="description">{movie.overview}</span>
      </div>
    </div>
  );
};

export default MovieCard;
