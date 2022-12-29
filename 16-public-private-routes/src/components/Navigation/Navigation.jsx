import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors/auth-selectors';

const Navigation = () => {
  const { isAuthSelector } = authSelectors;
  const isAuth = useSelector(isAuthSelector);
  return (
    <Navbar bg='dark' variant='dark'>
      <Container style={{ display: 'flex', gap: '20px' }}>
        <Link to='/'>Welcome</Link>
        {/* <Navbar.Brand href='/'>Welcome</Navbar.Brand> */}
        <Nav className='me-auto'>
          {isAuth ? (
            //     <Nav.Link href='/home'>Home</Nav.Link>
            <Link to='/home'>Home</Link>
          ) : (
            //     <Nav.Link href='/auth'>Auth</Nav.Link>
            <Link to='/auth'>Auth</Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
