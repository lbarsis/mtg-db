import React from 'react';
import '../../styles/browse/cardItem.css'

function CardItem({ card }) {
  return (
    <div className='card-item'>
      <img src={card?.image_uris?.normal} alt='cardimage' />
    </div>
  );
}

export default CardItem;
