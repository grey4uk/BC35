import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ src, closeModal }) => {
  const [storage, setStorage] = useLocalStorage({
    key: 'currentImage',
    initValue: '',
  });
  console.log('storage>>>>>', storage);

  useEffect(() => {
    const handleClose = (e) => {
      console.log('<<<<<<<<<click>>>>>>');
      if (e.keyCode === 27) closeModal();
    };
    setStorage(src);
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [closeModal, setStorage, src]);

  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleClose);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener(
  //     'keydown',
  //     this.handleClose
  //   );
  // }

  return createPortal(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        inset: '0',
        background: 'rgba(0,0,0,.5)',
      }}>
      <img
        src={
          src ||
          'https://img.freepik.com/free-photo/high-angle-shot-foggy-hills_181624-39614.jpg?size=626&ext=jpg'
        }
        alt='alt'
        width='500'
      />
    </div>,
    modalRoot
  );
};

export default Modal;
