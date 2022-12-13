import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ModalContextProvider } from 'components/ModalContext/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <React.StrictMode>
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
  // </React.StrictMode>
);
