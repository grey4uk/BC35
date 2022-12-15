import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ImagesPage from 'pages/ImagesPage';
import PageNotFound from 'pages/PageNotFound';
import NavBar from 'components/NavBar/NavBar';
import Modal from 'components/Modal/Modal';

const App = () => {
  return (
    <>
      <h1>Navigation</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='images' element={<ImagesPage />}>
          {/* incuded route with usage dynamic params */}
          {/* <Route
            path='modal/:name/desc/:abillity'
            element={<Modal />}
          /> */}
          {/* modal use query params from url */}
          <Route path='modal' element={<Modal />} />
        </Route>
        <Route path='404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </>
  );
};

export default App;
