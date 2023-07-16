import React from 'react';
import CardList from './CardList';
import '../../styles/browse/browse.css'
import Sidenav from '../sidenav/Sidenav';

function Browse() {
  return (
    <div className='browse-container'>
      <Sidenav />
      <CardList />
    </div>
  );
}

export default Browse;
