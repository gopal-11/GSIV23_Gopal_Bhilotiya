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
    <div
      // style={{
      //   color: 'black',
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   position: 'fixed',
      //   alignItems: 'center',
      //   backgroundColor: 'white',
      //   zIndex: 1000,
      //   top: 0,
      //   height: 50,
      //   width: '100%',
      //   padding: '10px',
      //   fontSize: '25px',
      //   fontWeight: 'bold',
      //   boxShadow: '0 3px 6px 0 #555',
      // }}
      className="header_main"
    >
      {location.pathname.includes('/detail') ? (
        <span
          // style={{ fontWeight: 600, fontSize: '24px' }}
          className="movie_detail"
        >
          Movie Detail
        </span>
      ) : (
        <>
          <div
            // style={{
            //   display: 'flex',
            //   padding: '10px 10px',
            //   borderRadius: '6px',
            //   marginLeft: '20px',
            //   width: '40%',
            //   backgroundColor: '#DFDFDF',
            //   alignItems: 'center',
            // }}
            className="search"
          >
            <SearchOutlined color="disabled" />
            <input
              placeholder="Search"
              // style={{
              //   fontSize: '16px',
              //   border: 'none',
              //   outline: 'none',
              //   marginLeft: '15px',
              //   width: '100%',
              //   backgroundColor: '#DFDFDF',
              // }}
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
