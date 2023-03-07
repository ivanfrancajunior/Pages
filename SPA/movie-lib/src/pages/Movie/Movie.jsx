import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../components/MovieCard'
import MovieCard from '../../components/MovieCard';
import './Movie.css'

const Movie = () => {

    const MovieURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_TMDB_KEY;

    const {id} = useParams()
    const [movie,setMovie] = useState(null)

    const getMovie = async (url) =>{

        const res = await fetch(url)
        const data = await res.json()

        setMovie(data) 
        console.log(data) 
    }
    useEffect(()=>{
        const movieUrl = `${MovieURL}${id}?${apiKey}`
        getMovie(movieUrl)
    },[])

    const formatCurrency = (number) =>{
        return number.toLocaleString('en-Us',{
            style:'currency',
            currency:'USD'
        })
    }
 
  return (
    <div className='movie-page'>
        {movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className='tagline'>{movie.tagline}.</p>
        <p><span>Lançamento:</span> {movie.release_date}.</p>
        <p><span>Duração:</span>  {movie.runtime} minutes.</p>
        <p><span>Orçamento: </span>{formatCurrency(movie.budget)}.</p>
        <p> <span>Receita: </span>{formatCurrency(movie.revenue)}.</p>
        <p className='description'><span>Sinopse:</span> {movie.overview}</p>
        
        </>}

    </div>
  )
}

export default Movie
