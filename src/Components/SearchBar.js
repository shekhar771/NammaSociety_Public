// SearchBar.js
import React, { useState } from 'react';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const CustomSearchBar = styled('div')({
  width: '100%',
  marginBottom: '3vh',
  display: 'flex',
  borderRadius: '3%',
  marginTop: '2vh',
});

const SearchBar = ({ onSearch, placeholder, setSearchQuery }) => {
  const [searchQuery, setSearchQueryLocal] = useState('');

  const handleSearchChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQueryLocal(newSearchQuery);

    // If setSearchQuery is provided, update the search query in the parent component
    if (setSearchQuery) {
      setSearchQuery(newSearchQuery);
    }
  };

  const handleKeyDown = (event) => {
    // Trigger search on "Enter" key press
    if (event.key === 'Enter' && onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <CustomSearchBar>
      <TextField
        fullWidth
        variant='outlined'
        placeholder={placeholder || 'Search...'}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                color: 'action.active',
                cursor: 'pointer',
              }}
              onClick={handleSearch}
            />
          ),
        }}
      />
    </CustomSearchBar>
  );
};

export default SearchBar;
