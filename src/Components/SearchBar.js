import React from 'react';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

//use
//<SearchBar placeholder='    Search Users...23' />
const CustomSearchBar = styled('div')({
  width: '100%',
  //   height: '50%',
  marginBottom: '3vh',
  display: 'flex',
  borderRadius: '3%',
  marginTop: '2vh',
  //   padding: '15px' /* Adjust padding as needed */,
  boxSizing:
    'border-box' /* Include padding and border in the element's total width and height */,
});

const SearchBar = ({ placeholder }) => {
  return (
    <CustomSearchBar>
      <TextField
        fullWidth
        variant='outlined'
        placeholder={placeholder || 'Search...'}
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                color: 'action.active',
                cursor: 'pointer',
              }}
            />
          ),
        }}
        sx={
          {
            // Center the placeholder text vertically
          }
        }
      />
    </CustomSearchBar>
  );
};

export default SearchBar;
