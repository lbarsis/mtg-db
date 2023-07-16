import React, { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import CardItem from './CardItem';

function CardList() {
  const { cards, nextPage } = useContext(CardContext)

  const displayCards = cards.map(card => {
    return <CardItem card={card} key={card.id}/>
  })

  return (
    <div>
      {displayCards}
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default CardList;
