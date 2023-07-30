import React from 'react';
import '../../styles/home/home.css'
import DeckList from './DeckList';

function Home() {
  return (
    <div>
      <div className='category-container'>
        <DeckList />
      </div>
    </div>
  );
}

export default Home;
