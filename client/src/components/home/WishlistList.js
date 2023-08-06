import React, { useContext } from 'react';
import WishlistItem from './WishlistItem'
import '../../styles/home/deckList.css'
import { WishlistContext } from '../../context/wishlistContext';

function WishlistList() {
  const { wishlists } = useContext(WishlistContext)

  const displayWishLists = wishlists.map(wishlist => {
    return <WishlistItem key={wishlist.id} wishlist={wishlist} />
  })

  return (
    <div className='deck-list'>
      {displayWishLists}
    </div>
  );
}

export default WishlistList;