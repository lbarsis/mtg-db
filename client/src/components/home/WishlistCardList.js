import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../browse/CardItem';
import { WishlistContext } from '../../context/wishlistContext';

function WishlistCardList() {
  const { wishlistId } = useParams()
  const {wishlist, setWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch(`/wishlists/${wishlistId}`)
    .then(r => r.json())
    .then(deck => setWishlist(deck))
  },[wishlistId, setWishlist])
  
  const displayWishlistCards = wishlist.wishlist_cards?.map(wishlist_card => {
    return <CardItem card={wishlist_card.card.card_data} key={wishlist_card.card.id}/>
  })

  return (
    <div className='card-list'>
      {displayWishlistCards}
    </div>
  );
}

export default WishlistCardList;