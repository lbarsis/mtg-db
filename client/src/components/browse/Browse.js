import React from 'react';
// import './mtg-cards-db-20230715.json'

function Browse() {

  fetch('https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1')
  .then(r => r.json())
  .then(cards => console.log(cards.data[1]))

  return (
    <div>
      Browse
    </div>
  );
}

export default Browse;
