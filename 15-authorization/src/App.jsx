import Loader from 'components/Loader/Loader';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations/auth-operations';
import authSelectors from 'redux/auth/selectors/auth-selectors';
import { offRefreshing } from 'redux/auth/slice/auth-slice';

const App = () => {
  const {
    isAuthSelector,
    loadingSelector,
    isRefreshingSelector,
  } = authSelectors;
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(loadingSelector);
  const isRefreshing = useSelector(isRefreshingSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('isAuth', isAuth);
  // useLayoutEffect(() => {
  //   isAuth &&
  //     setTimeout(() => {
  //       dispatch(offRefreshing());
  //     }, 400);
  //   isAuth ? navigate('/home') : navigate('/auth');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuth]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refresh...</h1>
  ) : (
    <main>
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='home' element={<HomePage />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='404' element={<PageNotFound />} />
          <Route
            path='*'
            element={<Navigate to='/404' />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
