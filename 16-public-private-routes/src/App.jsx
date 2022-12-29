import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations/auth-operations';
import authSelectors from 'redux/auth/selectors/auth-selectors';
import {
  offRefreshing,
  onRefreshing,
} from 'redux/auth/slice/auth-slice';

const App = () => {
  const {
    isAuthSelector,
    loadingSelector,
    isRefreshingSelector,
  } = authSelectors;
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(loadingSelector);
  const isRefreshing = useSelector(isRefreshingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(offRefreshing());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  useEffect(() => {
    dispatch(onRefreshing());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refresh...</h1>
  ) : (
    <main>
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
          <Route
            path='home'
            element={
              <PrivateRoute redirectTo='/auth'>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path='auth'
            element={
              <PublicRoute flag redirectTo='/home'>
                <AuthPage />
              </PublicRoute>
            }
          />
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
