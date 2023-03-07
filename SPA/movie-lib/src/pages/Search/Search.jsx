import React,{useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard'
import '../MoviesGrid.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_TMDB_KEY;

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies,setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
    
        setMovies(data.results)
    }

    useEffect(  () => {
        const  searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
         getSearchedMovies(searchWithQueryURL);

         
      }, [query]);
    
      return (
        <div className="container">
          <h2 className="title">
            Resultados para: <span className="query-text">{query}</span>
          </h2>
          <div className="movies-container">
          
            
          </div>
        </div>
      );
    };


export default Search
