import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Counter from 'components/Counter/Counter';
import ResetButton from 'components/ResetButton/ResetButton';
import StepSelect from 'components/StepSelect/StepSelect';
// import {
//   addAction,
//   minusAction,
// } from 'redux/toolkit/counter/counter-actions';
import {
  addAction,
  minusAction,
} from 'redux/toolkit/counter/counter-slice';

const buttonStyle = { width: '100px' };

// class component
class App extends Component {
  increment = () => {
    this.props.add(this.props.step);
  };
  decrement = () => {
    this.props.minus(this.props.step);
  };

  render() {
    console.log('LOG IN APP+++++++++');
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <h1>Redux</h1>
        <StepSelect />
        <Button
          style={buttonStyle}
          onClick={this.increment}>
          +
        </Button>
        <Counter />
        <Button
          style={buttonStyle}
          onClick={this.decrement}>
          -
        </Button>
        <ResetButton />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step,
});
const mapDispatchToProps = (dispatch) => ({
  add: (payload) => dispatch(addAction(payload)),
  minus: (payload) => dispatch(minusAction(payload)),
});

export default connect(
  mapStateToProps,

  mapDispatchToProps
)(App);
