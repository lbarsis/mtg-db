import React from 'react';

function CardItem({ card }) {
  return (
    <div className='card-container'>
      <img src={card?.image_uris?.normal} alt='cardimage' />
    </div>
  );
}

export default CardItem;
