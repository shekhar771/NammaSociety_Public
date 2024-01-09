import React, { useState } from 'react';
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
  const options2 = ['Level 1', 'Level 2', 'Level 3'];

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
              <CustomSelect
                options={options}
                onChange={handleChange}
                value={selectedOption}
                label='User Type:'
              />
              <CustomSelect
                options={options2}
                onChange={handleChange}
                value={selectedOption2}
                label='User Access Level:'
              />
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
