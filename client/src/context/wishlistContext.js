import { createContext, useState } from "react";

const WishlistContext = createContext(null)

function WishlistProvider({ children }) {
  const [wishlists, setWishlists] = useState([])
  const [wishlist, setWishlist] = useState({})

  const handleAddWishlist = () => {
    fetch('/wishlists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(r => {
        if (r.ok) {
          r.json().then(wishlist => {
            setWishlists([
              ...wishlists,
              wishlist
            ])
          })
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }

  function handleUpdateWishlistList(newWishlist) {
    setWishlists([
      ...wishlists,
      newWishlist
    ])
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
        r.json().then(wishlists => console.log(wishlists))
      } else {
        r.json().then(errors => console.log(errors))
      }
    })
  }

  const handleUpdateWishlist = (wishlist, formData) => {
    fetch(`/wishlists/${wishlist.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        wishlist_name: formData.wishlist_name,
        description: formData.description
      })
    })
  } 

  return (
    <WishlistContext.Provider value={{ wishlists, setWishlists, handleAddWishlist, handleAddCardToWishlist, wishlist, setWishlist, handleUpdateWishlistList, handleUpdateWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistContext, WishlistProvider };
