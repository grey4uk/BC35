const userSelector = (state) => state.user;

const loadingSelector = (state) => state.loading;

const isAuthSelector = (state) => state.isAuth;
const isRefreshingSelector = (state) => state.isRefreshing;

const authSelectors = {
  userSelector,
  loadingSelector,
  isAuthSelector,
  isRefreshingSelector,
};

export default authSelectors;
