import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: '1px solid #ccc',
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
