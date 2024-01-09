import React from 'react';
import Style from '../Css/Component.module.css';
import { styled } from '@mui/system';

const CustomButton = ({ buttonText }) => {
  return <button className={Style.inbut}>{buttonText}</button>;
};

export default CustomButton;
