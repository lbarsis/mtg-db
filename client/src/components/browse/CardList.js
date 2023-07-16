import React, { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import CardItem from './CardItem';
import '../../styles/browse/cardList.css'

function CardList() {
  const { cards, nextPage } = useContext(CardContext)

  const displayCards = cards.map(card => {
    return <CardItem card={card} key={card.id}/>
  })

  return (
    <div className='card-list'>
      {displayCards}
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default CardList;
