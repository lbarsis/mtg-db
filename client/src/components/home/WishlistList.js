import React, { useContext, useEffect } from 'react';
import WishlistItem from './WishlistItem'
import '../../styles/home/deckList.css'
import { WishlistContext } from '../../context/wishlistContext';

function WishlistList() {
  const { wishlists,setWishlists } = useContext(WishlistContext)

  
  useEffect(() => {
    fetch('/wishlists')
      .then(r => {
        if (r.ok) {
          r.json().then(wishlists => setWishlists(wishlists))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }, [setWishlists])

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