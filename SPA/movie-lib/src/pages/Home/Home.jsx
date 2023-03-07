import React,{useState,useEffect} from 'react';
import MovieCard from '../../components/MovieCard';
import '../MoviesGrid.css'

const MovieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_TMDB_KEY;

const Home = () => {

  const [topMovies,setTopMovies] = useState([])

  const getTopRatedMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
    console.log(data.results)
  }
  useEffect(()=>{
    const topRateURL = `${MovieURL}top_rated?${apiKey}`;

    console.log(topRateURL)

    getTopRatedMovies(topRateURL)
  },[])

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>carregando...</p> }
        {topMovies.length > 0  
        && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Home
