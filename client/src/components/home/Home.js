import React from 'react';
import '../../styles/home/home.css'
import DeckList from './DeckList';
import WishlistList from './WishlistList'
import CollectionCardList from './CollectionCardList';

function Home() {
  return (
    <div>
      <div className='deck-list-container'>
        <DeckList />
      </div>

      
      <div className='wishlist-list-container'>
        <WishlistList />
      </div>

      
      <div className='collection-container'>
        <CollectionCardList />
      </div>
    </div>
  );
}

export default Home;
