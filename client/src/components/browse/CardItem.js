import React, { useState, useContext, useEffect } from 'react';
import '../../styles/browse/cardItem.css'
import CardDetails from './CardDetails';

function CardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)

  const handleIsCardActiveChange = (e) => {
    e.target.id === "hide-card" ? setIsCardActive(false) : setIsCardActive(true)
  }

  return (
    <div className='card-item' id='show-card' onClick={handleIsCardActiveChange}>
      {/* <button onClick={() => setIsCardActive(false)}>X</button> */}

      {
        isCardActive ?
          <CardDetails card={card} setIsCardActive={setIsCardActive}/>
          :
          <>
            {card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
          </>
      }

    </div>
  );
}

export default CardItem;
