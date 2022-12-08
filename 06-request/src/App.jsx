import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import DogsList from 'components/DogsList/DogsList';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Loader from 'components/Loader/Loader';
import PokemonList from 'components/PokemonList/PokemonList';

const STATUSES = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

class App extends Component {
  state = {
    status: STATUSES.IDLE,
    loading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevStatus = prevState.status;
    const nextStatus = this.state.status;

    const nextError = this.state.error;
    if (prevStatus !== nextStatus && nextError) {
      Notify.init({ showOnlyTheLastOne: false });
      Notify.failure(nextError);
    }
  }

  startRequest = () => {
    this.setState({
      status: STATUSES.PENDING,
      error: null,
      loading: true,
    });
  };

  endRequestSuccess = () => {
    this.setState({
      status: STATUSES.SUCCESS,
    });
  };

  endRequestError = (error) => {
    this.setState({
      status: STATUSES.ERROR,
      error,
    });
  };

  loaderOff = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 500);
  };

  render() {
    const { state, ...methods } = this;
    const { status, loading, error } = state;
    // const {startRequest,endRequestError,endRequestSuccess,loaderOff}=this;
    // const operations={startRequest,endRequestError,endRequestSuccess,loaderOff}

    return (
      <ErrorBoundary>
        {status === STATUSES.PENDING ||
          (loading && <Loader />)}
        {status === STATUSES.ERROR && (
          <h2>
            Error in component '{error.component}'
            <br />
            {error.text}
          </h2>
        )}
        <div style={{ display: 'flex' }}>
          <PokemonList methods={methods} />

          <DogsList methods={methods} />

          {/* <DogsList methods={operations} />
          <PokemonList methods={operations} /> */}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
