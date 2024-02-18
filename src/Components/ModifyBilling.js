import React, { useEffect, useState } from 'react';
import BreadCrumb from './BreadCrumbs.js';
import { InnerDisplay, HighLight, CustomPaper } from './Wrapper.js';

import '../Css/Component.css';
import CustomInput from './Input.js';
import CustomButton from './CustomButton.js';
const ModifyBilling = ({ rowData }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    password: '',
    userType: '',
    userAccessLevel: '',
  });
  const handleSubmit = async () => {};
  //This is for Custom Button To input
  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2='Modify billing'
        path1='/Home/'
        path2='/Home/ModifyBilling'
      />
      <CustomPaper>
        <HighLight KeyWord='Modify Billing ' />
        <div className='TContainer2'>
          <CustomInput
            label='User ID:'
            placeholder='Saroja_9827'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomInput
            label='User Name:'
            placeholder='Saroja'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>
          <CustomInput
            label='User ID:'
            placeholder='Saroja_9827'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomInput
            label='User Name:'
            placeholder='Saroja'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>{' '}
          <CustomInput
            label='User ID:'
            placeholder='Saroja_9827'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomInput
            label='User Name:'
            placeholder='Saroja'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>{' '}
        </div>{' '}
        <div className='buttonses'>
          <CustomButton buttonText='Add User' onClick={handleSubmit} />
          <CustomButton buttonText='Add User' onClick={handleSubmit} />
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default ModifyBilling;
