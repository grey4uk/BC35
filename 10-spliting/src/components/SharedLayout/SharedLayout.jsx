import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <>
      <h1>Navigation</h1>
      <NavBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
