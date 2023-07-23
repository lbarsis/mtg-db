import React, { useState, useContext } from 'react';
import '../../styles/browse/cardItem.css'
import { CardContext } from '../../context/cardContext';
import { v4 as uuidv4 } from 'uuid';

function CardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)
  const { manaTypes } = useContext(CardContext)

  const handleChangeCardDisplay = () => {
    setIsCardActive(isCardActive => !isCardActive)
  }

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

  const manaSymbols = card.mana_cost?.match(/{.*?}/g);
  const displayManaSymbols = manaSymbols?.map(manaSymbol => {
    const match = manaTypes.find(manaType => manaType.symbol === manaSymbol)
    return match ? <img key={uuidv4()} src={match.svg_uri} alt='mana-cost' className='mana-cost' /> : null
  })

  return (
    <div className='card-item' onClick={handleChangeCardDisplay}>

      {
        isCardActive ?
          <div className='card-active'>
            {card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
            <div className='card-details'>
              <div>
                <button className='card-details-button' onClick={handleAddCardToCollection}>Add to Collection</button>
                <button className='card-details-button'>Add to Deck</button>
                <button className='card-details-button'>Add to Wishlist</button>
              </div>
              <span>
                {card.name} {displayManaSymbols}
              </span>
              <div>
                {card.type_line}
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
