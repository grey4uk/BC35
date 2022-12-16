import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const getActiveStyle = ({ isActive }) =>
  isActive ? { color: 'red', background: 'white' } : {};

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        {/* <Navbar.Brand href='/'>Navbar</Navbar.Brand> */}
        <Nav
          className='me-auto'
          style={{ display: 'flex', gap: '20px' }}>
          <NavLink to='/' style={getActiveStyle}>
            Home
          </NavLink>

          <NavLink to='/images' style={getActiveStyle}>
            Images
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
