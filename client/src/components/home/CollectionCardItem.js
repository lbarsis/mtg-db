import React, { useState, useContext, useEffect } from 'react';
import '../../styles/browse/cardItem.css'
import { CollectionCardContext } from '../../context/collectionCardContext';
import { v4 as uuidv4 } from 'uuid';
import { DeckContext } from '../../context/deckContext';
import { WishlistContext } from '../../context/wishlistContext';

function CollectionCardItem({card}) {
  const [isCardActive, setIsCardActive] = useState(false)
  const { manaTypes } = useContext(CollectionCardContext)
  const { handleAddDeck, decks, setDecks, handleAddCardToDeck } = useContext(DeckContext)
  const { handleAddWishlist, wishlists, setWishlists, handleAddCardToWishlist } = useContext(WishlistContext)

  useEffect(() => {
    fetch('/decks')
      .then(r => {
        if (r.ok) {
          r.json().then(decks => setDecks(decks))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }, [setDecks])


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

  const handleAddCardToCollection = () => {
    fetch('/add_card_to_collection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        card_data: card
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

  // console.log(decks)

  // Add to Deck Dropdown Options
  const displayAddToDeckDropdownSelectors = decks.map(deck => {
    return <button key={deck.id} onClick={() => handleAddCardToDeck(card, deck)}>{deck.deck_name}</button>
  })

  // Add to Wishlist Dropdown Options
  const displayAddToWishlistDropdownSelectors = wishlists.map(wishlist => {
    return <button key={wishlist.id} onClick={() => handleAddCardToWishlist(card, wishlist)}>{wishlist.wishlist_name}</button>
  })

  const handleIsCardActiveChange = (e) => {
    e.target.id === "hide-card" ? setIsCardActive(false) : setIsCardActive(true)
  }

  const manaSymbols = card.mana_cost?.match(/{.*?}/g);
  const displayManaSymbols = manaSymbols?.map(manaSymbol => {
    const match = manaTypes.find(manaType => manaType.symbol === manaSymbol)
    return match ? <img key={uuidv4()} src={match.svg_uri} alt='mana-cost' className='mana-cost' /> : null
  })

  // console.log(isCardActive)

  return (
    <div className='card-item' id='show-card' onClick={handleIsCardActiveChange}>
      {/* <button onClick={() => setIsCardActive(false)}>X</button> */}

      {
        isCardActive ?
          <div className='card-background'>
            <div className='card-active'>
              {card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
              <div className='card-details'>
                <div>
                  <button className='card-details-button' onClick={handleAddCardToCollection}>Add to Collection</button>

                  {/* Deck Dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Add To Deck</button>
                    <div className="dropdown-content">
                      {displayAddToDeckDropdownSelectors}
                      <button onClick={handleAddDeck}>Create New Deck</button>
                    </div>
                  </div>

                  {/* Wishlist Dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Wishlist</button>
                    <div className="dropdown-content">
                      {displayAddToWishlistDropdownSelectors}
                      <button onClick={handleAddWishlist}>Create New Wishlist</button>
                    </div>
                  </div>

                  <button id='hide-card' onClick={handleIsCardActiveChange}>X</button>
                </div>
                <span>
                  <p id='card-title'>{card.name} {displayManaSymbols}</p>
                  <p id='card-rarity'>{card.rarity}</p>
                </span>
                <div>
                  <p id='card-type'>{card.type_line}</p>
                  <p id='card-text'>{card.oracle_text}</p>
                </div>

              </div>
            </div>
          </div>
          :
          <>
            <button className='card-button' onClick={handleAddCardToCollection}>Add to Collection</button>
            <button className='card-button'>Add to Deck</button>
            <button className='card-button'>Add to Wishlist</button>
            {card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
          </>
      }

    </div>
  );
}

export default CollectionCardItem;
