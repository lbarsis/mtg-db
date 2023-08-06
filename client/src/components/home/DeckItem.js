import React from 'react';

function DeckItem({ deck }) {
  const { id, deck_name } = deck

  return (
    <div>
      <a href={`/decks/${id}`}>{deck_name}</a>
    </div>
  );
}

export default DeckItem;
