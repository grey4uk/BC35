import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors/auth-selectors';

const PublicRoute = ({
  children,
  flag = false,
  redirectTo = '/home',
}) => {
  const { isAuthSelector } = authSelectors;
  const isAuth = useSelector(isAuthSelector);
  const shouldRedirect = isAuth && flag;
  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
};

export default PublicRoute;
