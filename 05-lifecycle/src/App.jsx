import Gallery from 'components/Gallery/Gallery';
import { Component } from 'react';
// import db from 'db/db.json';
import SelectAmount from 'components/SelectAmount/SelectAmount';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    console.log('constructor>>>>>>>>');
    this.state = { amount: 3 };
  }

  incrementPictures = (value) => {
    this.setState({ amount: value });
  };

  render() {
    console.log('render in App++++++++++++');
    return (
      <ErrorBoundary>
        <div style={{ padding: '20px 60px' }}>
          <SelectAmount
            amount={this.state.amount}
            selectAmount={this.incrementPictures}
          />
        </div>
        <Gallery
          db={null}
          title='first'
          amount={this.state.amount}
        />
        <Gallery title='second' />
      </ErrorBoundary>
    );
  }
}

export default App;
