import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/navbar/navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    })

    setUser(null)
    navigate('/')
  }


  return (
    <div className='navbar'>
      {
        user ?
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/browse'>Browse</NavLink>
            <button onClick={handleLogout} className='logout-button'>Logout</button>
          </nav>
          :
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/browse'>Browse</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
          </nav>
      }
    </div>
  );
}

export default Navbar;
