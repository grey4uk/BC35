import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//   if we need save some value that might not change during changing state
// const Search = ({ setQuery, query }) => {
//   const inputRef = useRef();
//   const inputRef = useRef(query);
//   console.log('inputRef :>> ', inputRef);
const Search = ({ setQuery }) => {
  const inputRef = useRef();

  useEffect(() => {
    //here we set focus for input on mount
    inputRef.current.lastChild.firstChild.focus();
  }, []);

  const onSubmit = (e) => {
    // function throw to up value of input
    e.preventDefault();
    const { search } = e.currentTarget.elements;
    setQuery(search.value);
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      component='form'
      onSubmit={onSubmit}>
      <TextField
        // we set reference for input to current value in value inputRef
        ref={inputRef}
        fullWidth
        label='fullWidth'
        id='fullWidth'
        name='search'
      />
    </Box>
  );
};

export default Search;
