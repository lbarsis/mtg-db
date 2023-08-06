import React from 'react';
// Components
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Login from './users/Login';
import Signup from './users/Signup';
import Browse from './browse/Browse';
import DeckCardList from './home/DeckCardList';

// Hooks
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from '../context/userContext';
import { CardProvider } from '../context/cardContext';
import { DeckProvider } from '../context/deckContext';
import { WishlistProvider } from '../context/wishlistContext';
import { CollectionCardProvider } from '../context/collectionCardContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CardProvider>
          <DeckProvider>
            <WishlistProvider>
              <CollectionCardProvider>

                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/browse' element={<Browse />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/decks/:deckId' element={<DeckCardList />} />
                </Routes>
                
              </CollectionCardProvider>
            </WishlistProvider>
          </DeckProvider>
        </CardProvider>
      </UserProvider>
    </div>
  );
}

export default App;
