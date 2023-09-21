import { TextField, IconButton } from '@mui/material';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({
  placeholder,
  value,
  onChange,
  width = { xs: '200px', sm: '250px', md: '320px' },
  borderRadius = '20px',
}) => {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <IconButton size="small" edge="start" aria-label="search">
            <BsSearch color="#FEFEFE" />
          </IconButton>
        ),
        sx: {
          color: 'white',
        },
      }}
      sx={{
        backgroundColor: '#101215',
        width: width,
        height: { xs: 36, md: 40 },
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: borderRadius,
        '& .MuiInputBase-input': {
          padding: { xs: '6.5px 14px', md: '8.5px 14px' },
        },
        '& fieldset': { border: 'none !important' },
      }}
    />
  );
};

export default SearchBar;
