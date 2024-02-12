import React, { useEffect, useState } from 'react';
import BreadCrumb from './BreadCrumbs.js';
import { InnerDisplay, HighLight, CustomPaper } from './Wrapper.js';

import '../Css/Component.css';
import CustomInput from './Input.js';
import CustomButton from './CustomButton.js';
import CustomSelect from './InputSelect.js';
const ModifyBilling = ({ rowData }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    password: '',
    userType: '',
    userAccessLevel: '',
  });
  const options = [
    'REPAIR FUNDS',
    'Control Account',
    'DEVELOPEMENT FUNDS',
    'PAINTING FUNDS',
  ];
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleInputChange('userType', event);
  };
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
        link1='Billing Heads'
        link2='Modify billing'
        path1='/Home/BillingHeads'
        path2='/Home/ModifyBilling'
      />
      <CustomPaper>
        <HighLight KeyWord='Modify Billing ' />
        <div className='TContainer3'>
          <CustomInput
            label='GL Code:'
            placeholder='5001'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomInput
            label='Ledger:'
            placeholder='SINKING FUNDS'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>
          <CustomInput
            label='Short Name:'
            placeholder='SINK#FUND'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomSelect
            options={options}
            onChange={handleChange}
            value={selectedOption}
            label='Group:'
            placeholder='RECEIVED FROM MEMBERS'
          />
          <div></div>
          <CustomInput
            label='Interest Calculation:'
            placeholder='No'
            onChange={(event) => handleInputChange('userId', event)}
          />
          <div></div>
          <CustomInput
            label='GST:'
            placeholder='No'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>
          <CustomInput
            label='Compulsory GST:'
            placeholder='No'
            onChange={(value) => handleInputChange('userName', value)}
          />
          <div></div>
        </div>
        <div className='buttonses'>
          <CustomButton buttonText='Save' onClick={handleSubmit} />
          <CustomButton buttonText='Cancel' onClick={handleSubmit} />
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default ModifyBilling;
