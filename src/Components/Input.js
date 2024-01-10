import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import '../Css/Component.css';
import InputLabel from '@mui/material/InputLabel';
import CustomButton from './CustomButton';
import Select from '@mui/material/Select';

import { Option } from '@mui/base/Option';
import { KeyboardArrowDown } from '@mui/icons-material';
import { MenuItem } from '@mui/material';

import { makeStyles } from '@mui/system';

const CustomInput = ({ label, placeholder, onChange }) => {
  return (
    <div className='inputMain'>
      <label className='userid_text'>{label}</label>
      <input
        type='text'
        onChange={onChange}
        placeholder={placeholder}
        className='useridInput'
      ></input>
    </div>
  );
};
export const CustomInputPassword = ({ label, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='inputMain'>
      <label className='userid_text'>{label}</label>
      <input
        className='useridInput'
        type={'password'}
        name='password'
        id='password'
        placeholder='*******'
        onChange={onChange}
      />
    </div>
  );
};

export const CustomInputSelecta = ({ label, optionsCount, options }) => {
  const optionElements = Array.from({ length: optionsCount }, (_, index) => (
    <option className='userIdOpt' key={index + 1} value={options[index]}>
      {options[index]}
    </option>
  ));
  return (
    <>
      <div>
        <label>{label}</label>
        <Select placeholder='Select' indicator={<KeyboardArrowDown />}>
          {optionElements}
        </Select>
      </div>
    </>
  );
};

export default CustomInput;
