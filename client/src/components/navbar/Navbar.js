import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
// import '../../styles/navbar/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavbarComponent() {
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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ?
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/browse">Browse</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
              :
              <>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/browse'>Browse</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/signup'>Signup</Nav.Link>
              </>

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
