import React from 'react';
import '../../styles/browse/cardItem.css'

function CardItem({ card }) {
  return (
    <div className='card-item'>
      <button className='card-button'>Add to Collection</button>
      <button className='card-button'>Add to Collection</button>
      <button className='card-button'>Add to Collection</button>
      {
        card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />
      }
    </div>
  );
}

export default CardItem;
