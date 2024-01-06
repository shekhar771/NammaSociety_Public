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

// yeh main file mei dalna
// import UserUnlock from './UserUnlock';
// <UserUnlock />

const UserUnlock = () => {
  return (
    <div className={Style.body}>
      <div className={Style.breadCrumb}>
        <Breadcrumbs separator='>>' maxItems={2} aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='#'>
            Administrator
          </Link>

          <Link underline='hover' color='inherit' href='#'>
            User Unlock
          </Link>
        </Breadcrumbs>
      </div>
      <div className={Style.mainWrapper}>
        <div className={Style.highLight}>USER UNLOCK</div>
        <div>
          <input
            type='text'
            placeholder='Search User ID/ User Name'
            className={Style.search}
            startAdornment={
              <InputAdornment position='start'>
                <SearchOutlinedIcon />
              </InputAdornment>
            }
          ></input>
        </div>
        <div className='table'>
          <CustomizedTables />
        </div>
        <div className={Style.buttonse}>
          <Button className={Style.inbut} variant='outlined'>
            Search
          </Button>
          <Button className={Style.insa} variant='outlined'>
            unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserUnlock;
