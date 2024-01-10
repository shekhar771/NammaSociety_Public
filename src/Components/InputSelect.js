import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Style from '../Css/Component.module.css';
import { styled } from '@mui/material';

const CustomSelectButton = styled('div')({
  border: ' 1px solid #afafaf',
  borderRadius: '8px',
  minHeight: '5.5vh',
  padding: '8px',
  width: '150px', // Customize the width as needed
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: '#e6f5f1',

  fontFamily: 'Inter',
  fontWeight: 'Regular',
  fontSize: '24px',
  width: '40vw',
  marginLeft: '1vh',
  /* box-shadow: 5px 5px 8px 2px rgba(201, 199, 199, 0.8); */
  padding: '8px',
});
const CustomSelect = ({ label, options, onChange, value }) => {
  return (
    <div className={Style.inputMain}>
      <label className={Style.userid_text}>{label}</label>
      <Select
        value={value}
        onChange={onChange}
        label='select'
        sx={{
          border: ' 1px solid #afafaf',
          borderRadius: '8px',
          maxHeight: '5.8vh',
          padding: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: '#e6f5f1',

          fontFamily: 'Inter',
          fontWeight: 'Regular',
          fontSize: '24px',
          width: '40vw',
          marginLeft: '1vh',

          padding: '8px',
        }}
      >
        <MenuItem value='' disabled>
          Select an option
        </MenuItem>
        {options.map((option) => (
          <MenuItem className={Style.shit} key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
