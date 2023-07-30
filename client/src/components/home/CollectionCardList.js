import React, {useContext, useEffect} from 'react';
import { CollectionCardContext } from '../../context/collectionCardContext';
import CollectionCardItem from './CollectionCardItem';

function CollectionCardList() {
  const { collectionCards, setCollectionCards } = useContext(CollectionCardContext)

  
  useEffect(() => {
    fetch("/collection_cards").then((r) => {
      if (r.ok) {
        r.json().then((cards) => {
          setCollectionCards(cards)
          // console.log(cards)
        });
      } 
    });
  }, [setCollectionCards]);


  const displayCards = collectionCards.map(card => {
    return <CollectionCardItem card={card.card.card_data} key={card.id}/>
  })

  return (
    <div className='card-list'>
      {displayCards}
    </div>
  );
}

export default CollectionCardList;
