import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedMovie } from '../../store/movies';
import './index.css';

const MovieDetail: FC = () => {
  const movieDetail = useSelector(getSelectedMovie);

  const getRunTimeInHHMM = (runtime: number) => {
    let time = parseFloat((runtime / 60).toFixed(2));
    if (time < 10) return `0${time}`;
    else return time;
  };

  return (
    <div className="detail_container">
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetail['poster_path']}`}
        className="detail_container_img"
        alt={movieDetail.title}
      />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}
        className="detail_column"
      >
        <span className="title">
          <span>
            {movieDetail.title}{' '}
            <span className="rating_detail">
              {movieDetail.vote_average.toFixed(1)}
            </span>
          </span>
        </span>
        <span className="movie_duration">{`${movieDetail.release_date.substring(
          0,
          4
        )} | ${getRunTimeInHHMM(movieDetail.runtime)} | Director`}</span>
        <span className="movie_duration">Cast: Actor1,Actor2,...</span>
        <span className="movie_detail_description">
          Descripion: {movieDetail.overview}
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
