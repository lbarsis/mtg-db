import { createContext, useState } from "react";

const WishlistContext = createContext(null)

function WishlistProvider({ children }) {
  const [wishlists, setWishlists] = useState([])

  const handleAddWishlist = () => {
    fetch('/wishlists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(r => {
        if (r.ok) {
          r.json().then(data => console.log(data))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }

  const handleAddCardToWishlist = (card, wishlist) => {
    // console.log(card)
    fetch('/wishlist_cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        card: card,
        wishlist_id: wishlist.id
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => console.log(data))
      } else {
        r.json().then(errors => console.log(errors))
      }
    })
  }

  return (
    <WishlistContext.Provider value={{ wishlists, setWishlists, handleAddWishlist, handleAddCardToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistContext, WishlistProvider };
