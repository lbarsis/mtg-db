import React, { useState, useContext } from 'react';
import '../../styles/browse/cardItem.css'
import { CardContext } from '../../context/cardContext';
import { v4 as uuidv4 } from 'uuid';

function CardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)
  const { manaTypes } = useContext(CardContext)

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
                      <button >Create New Deck</button>
                    </div>
                  </div>

                  {/* Wishlist Dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Wishlist</button>
                    <div className="dropdown-content">
                      <a href="#">Wishlist 1</a>
                      <a href="#">Wishlist 2</a>
                      <a href="#">Wishlist 3</a>

                      <a href="#">Create New Wishlist</a>
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

export default CardItem;
