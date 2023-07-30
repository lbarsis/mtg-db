import React from 'react';

function DeckItem({ deck }) {
  return (
    <div>
      <p>{deck.deck_name}</p>
    </div>
  );
}

export default DeckItem;
