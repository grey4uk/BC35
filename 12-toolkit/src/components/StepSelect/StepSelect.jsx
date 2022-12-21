import { useDispatch, useSelector } from 'react-redux';
import { setStepAction } from 'redux/toolkit/step/step-slice';
// import { setStepAction } from 'redux/toolkit/step/step-actions';

const StepSelect = () => {
  const { step } = useSelector((state) => state);
  const dispatch = useDispatch();
  const selectStep = (e) => {
    const step = Number(e.target.value);
    dispatch(setStepAction(step));
  };

  return (
    <label>
      Select step fro counter
      <select
        id='select'
        onChange={selectStep}
        value={step}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </label>
  );
};

export default StepSelect;
