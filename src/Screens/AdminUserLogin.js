import React from 'react'
import { DemoPaper, HighLight, MainBody } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SearchBar from '../Components/SearchBar.js';
import DropdownTable from '../Components/DropdownTable.js';


const AdminUserLogin = () => {
    return (
        <MainBody>
            <BreadCrumb link1='Administrator' link2='Admin and User Login' />
            <Pager>
                <Stack direction='row' spacing={2}>
                    <DemoPaper elevation={3} variant='elevation'>
                    <HighLight KeyWord='Admin and User Login' />
                    <SearchBar placeholder='    Search User ID/ User Name' />
                    <DropdownTable/>
                    </DemoPaper>
                </Stack>
            </Pager>
        </MainBody>
  );
};

export default AdminUserLogin;