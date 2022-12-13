import {
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useApi } from 'hooks/useApi';
import styles from './Gallery.module.css';
import { useModalContext } from 'components/ModalContext/ModalContext';

const Gallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const methods = useApi();

  const { toggleSetSrc } = useModalContext();

  //   needed for react momoized reference for function
  // 1 right method
  const fetchImages = useCallback(async () => {
    console.log('fetchImages');
    await methods
      .getImages(query)
      .then((r) => setImages(r.hits));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // 2 right method
  // useEffect(() => {
  //   const fetchImages = () => {
  //     methods.getImages(query).then((r) => setImages(r.hits));
  //   };
  //   fetchImages();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

  const preparedImagesArray = useMemo(() => {
    // function for prepare array of images to render, it get only 4 keys
    return images
      .map(({ id, webformatURL, tags, largeImageURL }) => ({
        id,
        src: webformatURL,
        alt: tags,
        largeSrc: largeImageURL,
      }))
      .slice(0, 6);
  }, [images]);

  return (
    <ul className={styles.imagesList}>
      {preparedImagesArray?.map(
        ({ id, src, alt, largeSrc }) => (
          <li key={id}>
            <img
              src={src}
              alt={alt}
              width='300'
              onClick={() => toggleSetSrc(largeSrc)}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default Gallery;
