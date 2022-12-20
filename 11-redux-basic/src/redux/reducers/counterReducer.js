import { add, minus, reset } from 'redux/types/types';

const init = { counter: 0 };

// view of action
// action={type:'type',payload:value}

// export const counterReducer = (state = init, action) => {
//   if (action.type === add) {
//     return { counter: state.counter + action.payload };
//   }
//   if (action.type === minus) {
//     return { counter: state.counter - action.payload };
//   }
//   return state;
// };
export const counterReducer = (state = init, action) => {
  switch (action.type) {
    case add:
      return { counter: state.counter + action.payload };
    case minus:
      return { counter: state.counter - action.payload };
    case reset:
      return init;

    default:
      return state;
  }
};
