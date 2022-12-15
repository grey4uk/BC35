import { useState } from 'react';
import { useEffect } from 'react';
import {
  Link,
  useLocation,
  //  useParams,
  useSearchParams,
} from 'react-router-dom';

const Modal = () => {
  const [pokemon, setPokemon] = useState(null);
  const location = useLocation();
  console.log('location', location);

  //    incuded route with usage dynamic params
  // const params = useParams();
  // const { name } = params;
  // console.log('params :>> ', params);
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');

  useEffect(() => {
    name &&
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then(({ id, sprites: { front_default } }) =>
          setPokemon({ id, src: front_default })
        );
  }, [name]);

  // useEffect(() => {
  //   setSearchParams({ name });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [name]);

  return (
    <div>
      <Link to={location.state}>BACK</Link>
      {pokemon && (
        <img src={pokemon.src} alt={name} width='300' />
      )}
    </div>
  );
};

export default Modal;
