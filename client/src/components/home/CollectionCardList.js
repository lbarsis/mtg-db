import React, { useContext, useEffect, useState } from 'react';
import { CollectionCardContext } from '../../context/collectionCardContext';
import CardItem from '../browse/CardItem';
import ReactPaginate from 'react-paginate';

function CollectionCardList() {
  const { collectionCards, setCollectionCards } = useContext(CollectionCardContext)
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = collectionCards.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(collectionCards.length / itemsPerPage);

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

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % collectionCards.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const displayCards = currentItems.map(card => {
    return (
      <div  key={card.id}>
        <CardItem card={card.card.card_data} />
        <p>Total: {card.total_quantity}</p>
        <p>Available: {card.available_quantity}</p>
      </div>
    )
  })

  return (
    <>
      <div className='card-list'>
        {displayCards}
      </div>
      <ReactPaginate
        breakLabel="..."
        className='paginate'
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default CollectionCardList;
