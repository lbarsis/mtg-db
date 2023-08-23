import React, { useState, useContext } from 'react';
import '../../styles/browse/cardItem.css'
import { CardContext } from '../../context/cardContext';
import CardDetails from './CardDetails';

function CardItem({ card }) {
  const [isCardActive, setIsCardActive] = useState(false)
  const { handleAddCardToCollection } = useContext(CardContext)

  const handleIsCardActiveChange = (e) => {
    e.target.id === "hide-card" || e.target.id === "add-to-collection" ? setIsCardActive(false) : setIsCardActive(true)
  }

  return (
    <div className='card-item' id='show-card' onClick={handleIsCardActiveChange}>
      {
        isCardActive ?
          <CardDetails card={card} setIsCardActive={setIsCardActive} />
          :
          <>
            <div>
              {
                card.image_uris ?
                  <div className='grid-item-container'>

                    <div
                      className="material-symbols-rounded"
                      onClick={() => handleAddCardToCollection(card)}>
                      <span className="addText">Add to Collection</span>
                      library_add
                    </div>
                    <img src={card?.image_uris?.normal} alt='cardimage' />
                  </div>
                  :
                  <div className='grid-item-container'>
                    <span
                      className="material-symbols-rounded"
                      onClick={() => handleAddCardToCollection(card)}>
                      <span className="addText">Add to Collection</span>
                      library_add
                    </span>
                    <img src={card?.card_faces[0]?.image_uris?.normal} alt='cardimage' />
                  </div>
              }
            </div>
          </>
      }
    </div>
  );
}

export default CardItem;
