import { useState } from 'react';
import Counter from 'components/Counter/Counter';
import Gallery from 'components/Gallery/Gallery';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h2>Counter</h2>
      <Counter counter={counter} increment={setCounter} />
      <h2>Gallery</h2>
      <Gallery items={null} counter={counter} />
    </div>
  );
};

export default App;
