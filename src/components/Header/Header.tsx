import { FC, useState } from 'react';
import { SearchOutlined, HomeOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/movies';
import './index.css';

const Header: FC = () => {
  const goto = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [timeoutId, updateTimeoutId] = useState<NodeJS.Timeout>();
  const [searchText, setSearchText] = useState<string>('');

  const onSearchTextChange = (e: any) => {
    clearTimeout(timeoutId);
    setSearchText(e.target.value);
    const timeout = setTimeout(
      () =>
        dispatch(
          actions.searchMovies({ query: e.target.value, currentSearchPage: 1 })
        ),
      500
    );
    updateTimeoutId(timeout);
  };

  const goToHome = () => {
    goto('/');
  };

  return (
    <div className="header_main">
      {location.pathname.includes('/detail') ? (
        <span className="movie_detail">Movie Detail</span>
      ) : (
        <>
          <div className="search">
            <SearchOutlined color="disabled" />
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => onSearchTextChange(e)}
            />
          </div>
        </>
      )}

      <div className="home_icon">
        <HomeOutlined onClick={goToHome} />
      </div>
    </div>
  );
};

export default Header;
