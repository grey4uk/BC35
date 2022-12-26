import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import {
  Button,
  Card,
  Container,
  Dropdown,
  Form,
  Navbar,
  SplitButton,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  // getAllPokemons,
  // getOnePokemonByQuery,
  getAllPokemonsThunk,
  getOnePokemonThunk,
} from 'redux/operations/pokemon-operations';
import { pokemonStateSelector } from 'redux/selectors/pokemon-selectors';

import { pokemonSlice } from 'redux/slices/pokemon-slice';
const { setQuery } = pokemonSlice.actions;

const PokemonSearch = () => {
  const dispatch = useDispatch();
  const { pokemons, query, pokemon, loading } = useSelector(
    pokemonStateSelector
  );

  useEffect(() => {
    dispatch(getAllPokemonsThunk());
    // dispatch(getAllPokemons());
  }, [dispatch]);

  useEffect(() => {
    query && dispatch(getOnePokemonThunk(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(e.target.elements.query.value));
  };

  return (
    <Container>
      {loading && <Loader />}
      <Navbar expand='lg' variant='light' bg='dark'>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              name='query'
              type='text'
              placeholder='What pokemon looking?'
            />
            <Button type='submit'>Find</Button>
          </Form>
          <SplitButton
            variant='info'
            title='Choose pokemon'>
            {pokemons.map((el) => (
              <Dropdown.Item
                eventKey={el}
                key={el}
                onClick={(e) =>
                  dispatch(setQuery(e.target.textContent))
                }>
                {el}
              </Dropdown.Item>
            ))}
          </SplitButton>
        </Container>
      </Navbar>
      {pokemon && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={pokemon.url} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>{pokemon.abilities}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default PokemonSearch;
