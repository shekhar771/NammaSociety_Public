import React from 'react';
import Style from '../Css/UserUnlock.module.css';

const CustomButton = ({ buttonText }) => {
  return <button className={Style.inbut}>{buttonText}</button>;
};

export default CustomButton;
