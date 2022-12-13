import { useState } from 'react';
import Gallery from 'components/Gallery/Gallery';
import Search from 'components/Search/Search';
import Modal from 'components/Modal/Modal';
import { useModalContext } from 'components/ModalContext/ModalContext';

const App = () => {
  const [query, setQuery] = useState('');
  const { src } = useModalContext();
  return (
    <>
      {src && <Modal />}
      <Search setQuery={setQuery} />
      {/* <Search setQuery={setQuery} query={query} /> */}
      <Gallery query={query} />;
    </>
  );
};

export default App;
