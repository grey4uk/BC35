import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default SharedLayout;
