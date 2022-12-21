import { useSelector } from 'react-redux';

const Counter = () => {
  const {
    counter: { counter },
  } = useSelector((state) => state);
  console.log('LOG IN COUNTER>>>>>');
  return <h2>{counter}</h2>;
};

export default Counter;
