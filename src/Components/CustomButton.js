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

export const CustomSelector = ({ buttonText, active, onClick }) => {
  return (
    <button
      className={`customInbut ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export const ModifyButton = ({ onClick }) => {
  return (
    <button className={`customModify`} onClick={onClick}>
      MODIFY
    </button>
  );
};
