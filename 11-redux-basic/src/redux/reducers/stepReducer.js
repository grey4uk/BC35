import { reset, setStep } from 'redux/types/types';

export const stepReducer = (
  state = 1,
  { type, payload }
) => {
  switch (type) {
    case setStep:
      return payload;
    case reset:
      return 1;

    default:
      return state;
  }
};
