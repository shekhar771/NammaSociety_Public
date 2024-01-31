import React from 'react';
// import Style from '../Css/Component.module.css'; // Update the import
import '../Css/Component.css';
import { styled } from '@mui/system';

const CustomButton = ({ buttonText, onClick }) => {
  return (
    <button className='inbut' onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
