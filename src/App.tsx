import './styles.css';
import { FC } from 'react';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: 65 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
