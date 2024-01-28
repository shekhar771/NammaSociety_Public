import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Style from '../Css/Component.module.css';
import { styled } from '@mui/material';
import '../Css/Component.css';

const CustomSelect = ({ label, options, onChange, value }) => {
  return (
    <div className='inputMain'>
      <label className='userid_text'>{label}</label>
      <Select
        value={value}
        onChange={onChange}
        label=''
        placeholder='select'
        className='customSelect'
        sx={{
          border: ' 1px solid #afafaf',
          borderRadius: '8px',
          maxHeight: '5.8vh',
          padding: '8px',
          display: 'flex',
          flexShrink: '1',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: '#e6f5f1',
          fontFamily: 'Inter',
          fontWeight: 'Regular',
          fontSize: '24px',

          width: '65%',
          marginLeft: '1vh',

          padding: '8px',
          '@media screen and (max-width: 768px)': {
            width: '100%',
            marginTop: '1vh',
          },
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
