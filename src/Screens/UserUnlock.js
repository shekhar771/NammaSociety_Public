import * as React from 'react';
// import '../Css/UserUnlock.css';
import '../Css/Component.css';
import CustomizedTables from '../Components/Table';
import CustomButton from '../Components/CustomButton';
import SearchBar from '../Components/SearchBar.js';
import { HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
// import Pager from '../Components/Wrapper.js';
import Stack from '@mui/material/Stack';
import BreadCrumb from '../Components/BreadCrumbs.js';
import { useState } from 'react';

const UserUnlock = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };
  const triggerSearch = () => {
    console.log('Current search query:', searchQuery);

    handleSearch(searchQuery);
  };
  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2='User Unlock'
        path1='/Home/'
        path2='/Home/UserUnlock'
      />

      <CustomPaper>
        <Stack style={{ width: '100%' }} direction='column' spacing={2}>
          <HighLight KeyWord='USER UNLOCK' />

          <SearchBar
            setSearchQuery={setSearchQuery}
            placeholder='    Search User ID/ User Name'
            onSearch={handleSearch}
          />
          <CustomizedTables />
          <div className='buttonse'>
            <CustomButton buttonText='Search' onClick={triggerSearch} />
            <CustomButton buttonText='Unlock' />
          </div>
        </Stack>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default UserUnlock;
