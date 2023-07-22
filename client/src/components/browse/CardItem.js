import React from 'react';
import '../../styles/browse/cardItem.css'

function CardItem({ card }) {

  const handleAddCardToCollection = () => {
    fetch('/add_card_to_collection', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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

  return (
    <div className='card-item'>
      <button className='card-button' onClick={handleAddCardToCollection}>Add to Collection</button>
      <button className='card-button'>Add to Deck</button>
      <button className='card-button'>Add to Wishlist</button>
      {
        card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />
      }
    </div>
  );
}

export default CardItem;
