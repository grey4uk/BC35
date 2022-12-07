import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAmount({
  selectAmount,
  amount,
}) {
  const handleChange = (event) => {
    selectAmount(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>
          Select Amount of Pictures
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Select Amount of Pictures'
          value={amount}
          onChange={handleChange}>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
