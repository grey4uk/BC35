import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { resetAction } from 'redux/toolkit/shared-actions';

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant='danger'
      onClick={() => dispatch(resetAction())}>
      RESET
    </Button>
  );
};

export default ResetButton;
