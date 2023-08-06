import React, { useState, useContext } from 'react';
import '../../styles/browse/cardItem.css'
import { CardContext } from '../../context/cardContext';
import CardDetails from './CardDetails';

function CardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)
  const {handleAddCardToCollection} = useContext(CardContext)

   const handleIsCardActiveChange = (e) => {
    e.target.id === "hide-card" || e.target.id === "add-to-collection" ? setIsCardActive(false) : setIsCardActive(true)
  }

  return (
    <div className='card-item' id='show-card' onClick={handleIsCardActiveChange}>
      {
        isCardActive ?
          <CardDetails card={card} setIsCardActive={setIsCardActive}/>
          :
          <>
            <button className='card-button' id='add-to-collection' onClick={() => handleAddCardToCollection(card)}>Add to Collection</button>
            {/* <button className='card-button'>Add to Deck</button>
            <button className='card-button'>Add to Wishlist</button> */}
            {card.image_uris ? <img src={card?.image_uris?.normal} alt='cardimage' /> : <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />}
          </>
      }

    </div>
  );
}

export default CardItem;
