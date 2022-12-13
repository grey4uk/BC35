import { useState, createContext, useContext } from 'react';

// we create instance context
export const ModalContext = createContext();

// export of contextProvider
export const ModalContextProvider = ({ children }) => {
  const [src, setSrc] = useState('');

  const toggleSetSrc = (a) => {
    setSrc(a ? a : '');
  };

  return (
    <ModalContext.Provider value={{ src, toggleSetSrc }}>
      {children}
    </ModalContext.Provider>
  );
};

// created hook for usage of context in every component
export const useModalContext = () =>
  useContext(ModalContext);
