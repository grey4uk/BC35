import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  //  useParams,
  useSearchParams,
} from 'react-router-dom';

const Modal = () => {
  const [pokemon, setPokemon] = useState(null);
  const location = useLocation();
  // we save location pathname on first mount in ref because every new link change it
  const refFrom = useRef(location.pathname);
  console.log('refFrom', refFrom);
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
      <Link
        // we build specific path for url look like we create it in route's attribute path
        to={`${refFrom.current}/abillity?query=${name}`}
        replace>
        Abillity
      </Link>
      <Link
        to={`${refFrom.current}/states?query=${name}`}
        replace>
        States
      </Link>
      {/* this Outlet is place for render components Abillity and States */}
      <Outlet />
    </div>
  );
};

export default Modal;
