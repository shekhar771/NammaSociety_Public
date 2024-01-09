import * as React from 'react';
import Style from '../Css/UserUnlock.module.css';

import CustomButton from '../Components/CustomButton';
import { DemoPaper, HighLight, MainBody } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import Stack from '@mui/material/Stack';
import BreadCrumb from '../Components/BreadCrumbs.js';
import CustomInput, {
  CustomInputPassword,
  CustomInputSelect,
  CustomInputSelecta,
} from '../Components/Input.js';
import CustomSelect from '../Components/InputSelect.js';

const UserInfo = () => {
  const options = ['Admin', 'Society User'];
  return (
    <MainBody>
      <BreadCrumb link1='Administrator' link2='User Unlock' />
      <Pager>
        <Stack direction='row' spacing={2}>
          <DemoPaper elevation={3} variant='elevation'>
            <HighLight KeyWord='USER INFO' />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput label='User ID:' placeholder='Saroja_9827' />
              <CustomInput label='User Name:' placeholder='Saroja' />
              <CustomInputPassword label='Password:' placeholder='******' />
              <CustomInput label='User Type:' placeholder='Select' />
              {/* <CustomInput label='User Access Level:' placeholder='Select' /> */}
              {/* <CustomInputSelect
                label='User Access Level:'
                optionsCount={2}
                options={options}
              /> */}

              <CustomSelect options={options} label='hdfxfjxdjf' />
            </div>
            <div className={Style.buttonse}>
              <CustomButton buttonText='Add User' />
            </div>
          </DemoPaper>
        </Stack>
      </Pager>
    </MainBody>
  );
};

export default UserInfo;
