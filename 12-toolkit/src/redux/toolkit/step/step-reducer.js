import { createReducer } from '@reduxjs/toolkit';
import { resetAction } from '../shared-actions';
import { setStepAction } from './step-actions';

export const stepReducer = createReducer(
  1,
  //    {
  //   [setStepAction.type]: (_, action) => action.payload,
  //   [resetAction.type]: () => 1,
  // }
  (builder) =>
    builder
      .addCase(setStepAction, (_, { payload }) => payload)
      .addCase(resetAction, () => 1)
);
