import { useEffect, useState } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Modal from 'components/Modal/Modal';

const Gallery = ({ items, counter }) => {
  const [src, setSrc] = useState('');
  const [images, setImages] = useState(items);
  // https://dog.ceo/api/breeds/image/random/:amount
  useEffect(() => {
    Notify.info(
      `For start request for images press "Click me"`
    );
  }, []);

  useEffect(() => {
    console.log('UseEffect for counter-------');

    if (counter > 0)
      axios
        .get(
          `https://dog.ceo/api/breeds/image/random/${counter}`
        )
        .then(({ data }) => setImages(data.message));
  }, [counter]);

  useEffect(() => {
    console.log('UseEffect for images-------');
    const count = images?.length ?? 0;
    if (count >= 3) {
      Notify.info(`You have already ${count} images`);
    }
  }, [images]);

  const toggleModal = (src) =>
    setSrc((prev) => (prev ? '' : src));

  return (
    <ul>
      {console.log('image.length', images?.length)}
      {images?.map((image) => (
        <li key={image}>
          <img
            src={image}
            alt='alt'
            width='300'
            onClick={() => toggleModal(image)}
          />
          {src === image && (
            <Modal src={src} closeModal={toggleModal} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
