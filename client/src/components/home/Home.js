import React from 'react';
import '../../styles/home/home.css'
import DeckList from './DeckList';
import CollectionCardList from './CollectionCardList';

function Home() {
  return (
    <div>
      {/* <div className='category-container'>
        <DeckList />
      </div> */}

      
      {/* <div className='category-container'>
      </div> */}

      
      <div className='category-container'>
        <CollectionCardList />
      </div>
    </div>
  );
}

export default Home;
