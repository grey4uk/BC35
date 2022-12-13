import { useModalContext } from 'components/ModalContext/ModalContext';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = () => {
  const { src, toggleSetSrc } = useModalContext();
  useEffect(() => {
    const handleClose = (e) => {
      console.log('<<<<<<<<<click>>>>>>');
      if (e.keyCode === 27) toggleSetSrc();
    };

    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [toggleSetSrc, src]);

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
