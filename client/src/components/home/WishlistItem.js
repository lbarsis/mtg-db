import React from 'react';

function WishlistItem({ wishlist }) {
  const { id, wishlist_name } = wishlist

  return (
    <div>
      <a href={`/wishlists/${id}`}>{wishlist_name}</a>
    </div>
  );
}

export default WishlistItem;
