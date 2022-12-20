import Counter from 'components/Counter/Counter';
import ResetButton from 'components/ResetButton/ResetButton';
import StepSelect from 'components/StepSelect/StepSelect';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
  // useDispatch,
  // useSelector,
  connect,
} from 'react-redux';

import { actions } from 'redux/actions/actions';

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

// function component
// const App = ({ counter, add, minus }) => {
//   // dispatch - method for pass action to reducer
//   // const dispatch = useDispatch();
//   // hook that could return state
//   // const counter = useSelector((state) => state.counter);
//   // const { counter } = useSelector((state) => state);

//   // with connect
//   const increment = () => {
//     add(2);
//   };
//   const decrement = () => {
//     minus();
//   };
//   // const increment = () => dispatch(actions.addAction(2));
//   // const decrement = () => dispatch(actions.minusAction());

//   return (
//     <main>
//       <h1>Redux</h1>
//       <Button style={buttonStyle} onClick={increment}>
//         +
//       </Button>
//       <h2>{counter}</h2>
//       <Button style={buttonStyle} onClick={decrement}>
//         -
//       </Button>
//     </main>
//   );
// };

const mapStateToProps = (state) => ({
  step: state.step,
});
const mapDispatchToProps = (dispatch) => ({
  add: (payload) => dispatch(actions.addAction(payload)),
  minus: (payload) =>
    dispatch(actions.minusAction(payload)),
});

export default connect(
  mapStateToProps,

  mapDispatchToProps
)(App);

// const a = (aa) => {
//   console.log('aa :>> ', aa);
//   return (bb) => aa + bb;
// };
// console.log('a(1)(2);', a(1)(2));
