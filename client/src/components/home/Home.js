import React from 'react';
import '../../styles/home/home.css'
import DeckList from './DeckList';
import WishlistList from './WishlistList'
import CollectionCardList from './CollectionCardList';

function Home() {
  return (
    <div>
      <div className='category-container'>
        <DeckList />
      </div>

      
      <div className='category-container'>
        <WishlistList />
      </div>

      
      <div className='category-container'>
        <CollectionCardList />
      </div>
    </div>
  );
}

export default Home;
