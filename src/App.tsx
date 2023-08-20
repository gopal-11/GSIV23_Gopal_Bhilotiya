// import "./styles.css";

import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"


export default function App() {
  return (
  
    <BrowserRouter>
    <Header />
  <div style={{marginTop:65}}>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<MovieDetail />} />

       
      </Routes>
      </div>
    </BrowserRouter>
  
  );
}
