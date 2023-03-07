import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';

//pages
import App from './App';
import Movie from './pages/Movie/Movie';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';

//pages


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
