import React, { useState } from 'react';
import '../../styles/browse/cardItem.css'
import CardDetails from '../browse/CardDetails';

function CollectionCardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)

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

  return (
    <div className='card-item' id='show-card' onClick={handleIsCardActiveChange}>

      {
        isCardActive ?
          <>
            <CardDetails card={card.card.card_data} setIsCardActive={setIsCardActive} />
          </>
          :
          <>
            <button className='card-button' onClick={handleAddCardToCollection}>Add to Collection</button>
            <button className='card-button'>Add to Deck</button>
            <button className='card-button'>Add to Wishlist</button>
            {card.card.card_data.image_uris ? <img src={card.card.card_data?.image_uris?.normal} alt='cardimage' /> : <img src={card.card.card_data?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
            <p>Total Quantity: {card.total_quantity}</p>
            <p>Available Quantity: {card.available_quantity}</p>
          </>
      }

    </div>
  );
}

export default CollectionCardItem;
