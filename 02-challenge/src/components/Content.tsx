
import React, {useState, useEffect} from 'react'
import { MovieCard } from './MovieCard';
import { api } from '../services/api';
import '../styles/content.scss';
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps{
  genreId:number
}


export function Content(props:ContentProps) {

    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${props.genreId}`).then(response => {
        setMovies(response.data);
      });
    },[props.genreId])

 return(
    <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                  key ={movie.imdbID} 
                  title={movie.Title} 
                  poster={movie.Poster} 
                  runtime={movie.Runtime} 
                  rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
    </main>
 )
}