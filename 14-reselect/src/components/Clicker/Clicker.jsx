import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clickerSelector } from 'redux/clicker/selectors';
import { click } from 'redux/clicker/slice';

const Clicker = () => {
  const dispatch = useDispatch();
  const clicker = useSelector(clickerSelector);
  console.log(clicker);
  return (
    <Button onClick={() => dispatch(click())}>Click</Button>
  );
};

export default Clicker;
