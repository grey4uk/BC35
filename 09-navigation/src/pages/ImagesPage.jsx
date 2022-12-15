import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  Link,
  Outlet,
  useLocation,
  useSearchParams,
  //  useParams
} from 'react-router-dom';

const ImagesPage = () => {
  const [images, setImages] = useState([]);
  const [searchParams] = useSearchParams();
  const pokemonName = searchParams.get('query');

  const location = useLocation();

  //    incuded route with usage dynamic params
  //   const { name: pokemonName } = useParams();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((r) => r.json())
      .then(({ results }) => setImages(results));
  }, []);

  return (
    <>
      <h2>Images</h2>
      <ListGroup>
        {images.map(({ name }) => (
          <ListGroup.Item key={name}>
            {/* incuded route with usage dynamic params */}
            {/* <Link to={`modal/${name}/desc/strength`}> */}
            {/* modal use query params from url */}
            <Link
              to={`modal?query=${name}`}
              state={location}>
              {name}
            </Link>
            {pokemonName === name && <Outlet />}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ImagesPage;
