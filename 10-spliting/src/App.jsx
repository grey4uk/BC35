import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import ImagesPage from 'pages/ImagesPage';
// import PageNotFound from 'pages/PageNotFound';
// import Modal from 'components/Modal/Modal';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() =>
  import(
    'pages/HomePage' /* webpackChunkName: 'HomePage' */
  )
);
const ImagesPage = lazy(() =>
  import(
    'pages/ImagesPage' /* webpackChunkName: 'ImagesPage' */
  )
);
const PageNotFound = lazy(() =>
  import(
    'pages/PageNotFound' /* webpackChunkName: 'PageNotFound' */
  )
);
const Modal = lazy(() =>
  import('components/Modal' /* webpackChunkName: 'Modal' */)
);

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='images' element={<ImagesPage />}>
          {/* incuded route with usage dynamic params */}
          {/* <Route
            path='modal/:name/desc/:abillity'
            element={<Modal />}
          /> */}
          {/* modal use query params from url */}
          <Route path='modal' element={<Modal />}>
            {/* included in route modal 2 another routes */}
            <Route
              path='abillity'
              element={<h3>ABILLITY</h3>}
            />
            <Route
              path='states'
              element={<h3>STATES</h3>}
            />
          </Route>
        </Route>
        <Route path='404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Route>
    </Routes>
  );
};

export default App;
