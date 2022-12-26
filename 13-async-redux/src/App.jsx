import PokemonSearch from 'components/PokemonSearch/PokemonSearch';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { click } from 'redux/actions/actions';
// import { store } from 'redux/store';

const App = () => {
  const dispatch = useDispatch();
  // console.log('store.getState() in App', store.getState());

  const handleClick = () => {
    // store.dispatch(click(1));
    dispatch(click(1));
  };

  return (
    <>
      <Button type='button' onClick={handleClick}>
        CLICK
      </Button>
      <PokemonSearch />
    </>
  );
};

export default App;
