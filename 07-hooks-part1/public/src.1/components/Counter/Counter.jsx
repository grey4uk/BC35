import { useState } from 'react';

// const Counter = () => {
//   //bad practice
//   const [state, setState] = useState({
//     counter: 0,
//     flag: true,
//   });

//   const showCounter = () =>
//     setState({ ...state, flag: !state.flag });
//   //   const showCounter = () => setFlag((prev) => !prev);
//   console.log('re-render>>>>>>');

//   const { counter, flag } = state;
//   return (
//     <>
//       {flag && <p>{counter}</p>}
//       <button
//         type='button'
//         onClick={() =>
//           setState({ ...state, counter: counter + 1 })
//         }>
//         Click me
//       </button>
//       <button type='button' onClick={showCounter}>
//         ShowCounter
//       </button>
//     </>
//   );
// };

const Counter = ({ counter, increment }) => {
  const [flag, setFlag] = useState(true);
  const showCounter = () => setFlag(!flag);
  //   const showCounter = () => setFlag((prev) => !prev);
  console.log('re-render>>>>>>');
  return (
    <>
      {flag && <p>{counter}</p>}
      <button
        type='button'
        onClick={() => increment(counter + 1)}>
        Click me
      </button>
      <button type='button' onClick={showCounter}>
        ShowCounter
      </button>
    </>
  );
};

export default Counter;
