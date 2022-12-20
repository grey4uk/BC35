import {
  add,
  minus,
  reset,
  setStep,
} from 'redux/types/types';

// functions that return object of action
const addAction = (payload = 1) => ({ type: add, payload });
const minusAction = (payload = 1) => ({
  type: minus,
  payload,
});

const setStepAction = (payload) => ({
  type: setStep,
  payload,
});

const resetAction = () => ({ type: reset });

export const actions = {
  minusAction,
  addAction,
  setStepAction,
  resetAction,
};
