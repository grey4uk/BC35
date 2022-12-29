import { Button, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations/auth-operations';
import authSelectors from 'redux/auth/selectors/auth-selectors';

const HomePage = () => {
  const { userSelector } = authSelectors;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <h1>HOME</h1>
      <Navbar>
        <Container>
          <Navbar.Brand href='#home'>
            Navbar with text
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <img
              src={user?.img ?? ''}
              alt={user?.name ?? ''}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
              }}
            />
            <Navbar.Text>
              Signed in as: {user?.name ?? ''}
            </Navbar.Text>
            <Button type='button' onClick={handleLogOut}>
              Sign Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomePage;
