import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors/auth-selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isAuthSelector } = authSelectors;
  const isAuth = useSelector(isAuthSelector);
  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
