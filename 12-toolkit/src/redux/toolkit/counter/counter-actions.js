import { createAction } from '@reduxjs/toolkit';

export const addAction = createAction(
  'toolkit/counter/add'
);
export const minusAction = createAction(
  'toolkit/counter/minus'
);
