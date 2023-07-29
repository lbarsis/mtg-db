import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from '../context/userContext';
import Login from './users/Login';
import Signup from './users/Signup';
import Browse from './browse/Browse';
import { CardProvider } from '../context/cardContext';
import { DeckProvider } from '../context/deckContext';
import { WishlistProvider } from '../context/wishlistContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CardProvider>
          <DeckProvider>
            <WishlistProvider>

              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/browse' element={<Browse />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>

            </WishlistProvider>
          </DeckProvider>
        </CardProvider>
      </UserProvider>
    </div>
  );
}

export default App;
