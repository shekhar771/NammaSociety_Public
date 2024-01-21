import React from 'react'
import { DemoPaper,  MainBody } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SearchBar from '../Components/SearchBar.js';
import DropdownTable from '../Components/DropdownTable.js';
import '../Css/UserInfo.css';
import {  HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';

const AdminUserLogin = () => {
    return (
        <InnerDisplay>
            <BreadCrumb link1='Administrator' link2='Admin and User Login' />
            <CustomPaper>
                <Stack direction='row' spacing={2}>
                    <CustomPaper elevation={3} variant='elevation'>
                    <HighLight KeyWord='Admin and User Login' />
                    <SearchBar placeholder='    Search User ID/ User Name' />
                    <DropdownTable/>
                    </CustomPaper>
                </Stack>
            </CustomPaper>
        </InnerDisplay>
  );
};

export default AdminUserLogin;