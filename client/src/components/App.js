import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from '../context/userContext';
import Login from './users/Login';
import Signup from './users/Signup';
import Browse from './browse/Browse';

function App() {
  return (
    <div className="App">
      <UserProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
