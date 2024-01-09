import * as React from 'react';
import Button from '@mui/material/Button';
import Style from '../Css/UserUnlock.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CustomizedTables from '../Components/Table';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import CustomButton from '../Components/CustomButton';
import SearchBar from '../Components/SearchBar.js';
import { DemoPaper, HighLight, MainBody } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BreadCrumb from '../Components/BreadCrumbs.js';

const UserUnlock = () => {
  return (
    <MainBody>
      <BreadCrumb link1='Administrator' link2='User Unlock' />
      <Pager>
        <Stack direction='row' spacing={2}>
          <DemoPaper elevation={3} variant='elevation'>
            <HighLight KeyWord='USER UNLOCK' />

            <SearchBar placeholder='    Search User ID/ User Name' />

            <CustomizedTables />

            <div className={Style.buttonse}>
              <CustomButton buttonText='Search' />
              <CustomButton buttonText='Unlock' />
            </div>
          </DemoPaper>
        </Stack>
      </Pager>
    </MainBody>
  );
};

export default UserUnlock;
