import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<>Loading...</>}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
