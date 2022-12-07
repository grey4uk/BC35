import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: '' };

  componentDidCatch(err) {
    console.log('err', err.message);
    if (err) this.setState({ error: err.message });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? (
      <>
        <h1>Something wrong, reload app</h1>
        <p>{error}</p>
      </>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
