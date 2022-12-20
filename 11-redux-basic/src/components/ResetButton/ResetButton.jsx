import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { actions } from 'redux/actions/actions';

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant='danger'
      onClick={() => dispatch(actions.resetAction())}>
      RESET
    </Button>
  );
};

export default ResetButton;
