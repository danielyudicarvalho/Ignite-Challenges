import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';


export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="container">
        <SideBar
          click={handleClickButton}
          genreId={selectedGenreId}
        />
        <Content
          genreId={selectedGenreId}
        />
      </div>
    </div>
  )
}