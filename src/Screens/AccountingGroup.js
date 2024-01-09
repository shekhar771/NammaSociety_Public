import * as React from 'react';

import SearchBar from '../Components/SearchBar.js';
import { DemoPaper, HighLight, MainBody } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BreadCrumb from '../Components/BreadCrumbs.js';

const AccountingGroup = () => {
  return (
    <MainBody>
      <BreadCrumb link1='Administrator' link2='Accounting Groups' />
      <Pager>
        <Stack direction='row' spacing={2}>
          <DemoPaper elevation={3} variant='elevation'>
            <HighLight KeyWord='Accounting Groups' />
            <SearchBar placeholder='    Search User ID/ User Name' />
          </DemoPaper>
        </Stack>
      </Pager>
    </MainBody>
  );
};

export default AccountingGroup;
