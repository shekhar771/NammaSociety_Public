// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import TextField from '@mui/material/TextField';

// //use
// //<SearchBar placeholder='    Search Users...23' />
// const CustomSearchBar = styled('div')({
//   width: '100%',
//   //   height: '50%',
//   marginBottom: '3vh',
//   display: 'flex',
//   borderRadius: '3%',
//   marginTop: '2vh',
//   //   padding: '15px' /* Adjust padding as needed */,
//   boxSizing:
//     'border-box' /* Include padding and border in the element's total width and height */,
// });

// const SearchBar = ({ placeholder, onSearch ,setSearchQuery }) => {
//   const [searchQuery, setSearchQueryLocal] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setSearchQueryLocal(newSearchQuery);

//   };
//   if (setSearchQuery) {
//     setSearchQuery(newSearchQuery);
//   }

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && onSearch) {
//       onSearch(searchQuery);
//     }
//   };
//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch(searchQuery);
//     }
//   };
//   return (
//     <CustomSearchBar>
//       <TextField
//         fullWidth
//         variant='outlined'
//         onClick={handleSearch}
//         value={searchQuery}
//         onChange={handleSearchChange}
//         onKeyDown={handleKeyDown}
//         placeholder={placeholder || 'Search...'}
//         InputProps={{
//           startAdornment: (
//             <SearchIcon
//               sx={{
//                 color: 'action.active',
//                 cursor: 'pointer',
//               }}
//               onClick={handleSearch}
//             />
//           ),
//         }}
//         sx={
//           {
//             // Center the placeholder text vertically
//           }
//         }
//       />
//     </CustomSearchBar>
//   );
// };

// export default SearchBar;
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

const SearchBar = ({ onSearch, setSearchQuery }) => {
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
        placeholder='Search...'
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
