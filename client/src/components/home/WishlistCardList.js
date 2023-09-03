import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../browse/CardItem';
import { WishlistContext } from '../../context/wishlistContext';

function WishlistCardList() {
  const { wishlistId } = useParams()
  const { wishlist, setWishlist, handleUpdateWishlist } = useContext(WishlistContext)
  const [formData, setFormData] = useState({
    wishlist_name: "",
    description: ""
  })

  useEffect(() => {
    fetch(`/wishlists/${wishlistId}`)
      .then(r => r.json())
      .then(wishlist => setWishlist(wishlist))
  }, [wishlistId, setWishlist])

  useEffect(() => {
    if (wishlist) {
      setFormData({
        wishlist_name: wishlist.wishlist_name || "",
        description: wishlist.description || ""
      })
    }
  }, [wishlist])

  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const displayWishlistCards = wishlist.wishlist_cards?.map(wishlist_card => {
    return <CardItem card={wishlist_card.card.card_data} key={wishlist_card.card.id} />
  })

  return (
    <>
      <input className='title'
        name="wishlist_name"
        onChange={handleChangeFormData}
        value={formData.wishlist_name}
        onBlur={() => handleUpdateWishlist(wishlist, formData)}
      />

      <textarea className='description'
        name="description"
        onChange={handleChangeFormData}
        value={formData.description}
        onBlur={() => handleUpdateWishlist(wishlist, formData)}
      />

      <div className='card-list'>
        {displayWishlistCards}
      </div>
    </>
  );
}

export default WishlistCardList;