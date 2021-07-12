
import React, {useState, useEffect} from 'react'
import { Button } from './Button';
import { api } from '../services/api';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface SideBarProps{
  click:() => any,
  genreId: number
}

export function SideBar(props:SideBarProps) {
  

  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

    useEffect(() => {
      api.get<GenreResponseProps>(`genres/${props.genreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }, [props.genreId])


  return(
    <>
        <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
        <nav className="sidebar">
              <span>Watch<p>Me</p></span>
      
              <div className="buttons-container">
                {genres.map(genre => (
                  <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => props.click(genre.id)}
                    selected={props.genreId === genre.id}
                  />
                ))}
              </div>
      
            </nav>

        </>
    )
}