import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Style from '../Css/Component.module.css';
import { styled } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import CustomButton from './CustomButton';
import Select from '@mui/material/Select';

import { Option } from '@mui/base/Option';
import { KeyboardArrowDown } from '@mui/icons-material';
import { MenuItem } from '@mui/material';

import { makeStyles } from '@mui/system';
// const CustomInput = () => {
//   return (
//     <Input
//       placeholder='Search'
//       style={{
//         // Add your custom styles here
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         padding: '8px',
//         width: '20vw',
//       }}
//     />
//   );
// };
export const CustomLabel = () => {
  //   <InputLabel htmlFor='custom-input'>Search</InputLabel>;
};
export const CustomLAbIn = () => {
  //   <div>
  //     <CustomInput />
  //     <CustomLabel />
  //   </div>;
};
const CustomInput = ({ label, placeholder }) => {
  return (
    <div className={Style.inputMain}>
      <label className={Style.userid_text}>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        className={Style.useridInput}
      ></input>
    </div>
  );
};
export const CustomInputPassword = ({ label, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={Style.inputMain}>
      <label className={Style.userid_text}>{label}</label>
      <input
        className={Style.useridInput}
        type={'password'}
        name='password'
        id='password'
      />
    </div>
  );
};

export const CustomInputSelecta = ({ label, optionsCount, options }) => {
  const optionElements = Array.from({ length: optionsCount }, (_, index) => (
    <option className={Style.userIdOpt} key={index + 1} value={options[index]}>
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

// export const CustomInputSelect = ({ label, optionsCount, options }) => {
//   const optionElements = Array.from({ length: optionsCount }, (_, index) => (
//     <option
//       className={Style.userIdOptions}
//       key={index + 1}
//       value={options[index]}
//     >
//       {options[index]}
//     </option>
//   ));
// return (
// <div
// // className={Style.inputMainOption}
// >
//   {/* <div className={Style.inputMainSelect}> */}
//   <label className={Style.userid_text}>{label}</label>
//   <Select
//     className={Style.useridInputOption}
//     placeholder='Select'
//     indicator={<KeyboardArrowDown />}
//   >
//     {optionElements}
//   </Select>
//   {/* </div> */}
// </div>
//   );
// };

export default CustomInput;

// const useStyles = makeStyles((theme) => ({
//   inputMain: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '2vh 0vh',
//     width: '90%',
//     whiteSpace: 'nowrap',
//     justifyContent: 'space-around',
//   },
//   useridText: {
//     fontSize: '1.625rem',
//     fontFamily: 'Inter, sans-serif',
//     fontWeight: 400,
//     marginRight: '1rem',
//     textAlign: 'start',
//     width: '20vw',
//   },
//   useridInput: {
//     flexShrink: 2,
//     backgroundColor: '#e6f5f1',
//     fontFamily: 'Inter',
//     fontWeight: 'Regular',
//     fontSize: '24px',
//     width: '40vw',
//     marginLeft: '1vh',
//     boxShadow: '5px 5px 8px 2px rgba(201, 199, 199, 0.8)',
//     borderRadius: '8px',
//     border: '1px solid #afafaf',
//     padding: '8px',
//   },
//   userIdOptions: {
//     backgroundColor: '#f9f9f9',
//     width: '40vw',
//     paddingLeft: 0,
//     fontFamily: 'Inter',
//     fontWeight: 'Regular',
//     fontSize: '24px',
//     border: '1px solid #afafaf',
//   },
// }));

// export const CustomInputSelecta = ({ label, optionsCount, options }) => {
//   const classes = useStyles();

//   const optionElements = Array.from({ length: optionsCount }, (_, index) => (
//     <MenuItem
//       className={classes.userIdOptions}
//       key={index + 1}
//       value={options[index]}
//     >
//       {options[index]}
//     </MenuItem>
//   ));

//   return (
//     <div className={classes.inputMain}>
//       <InputLabel className={classes.useridText}>{label}</InputLabel>
//       <Select
//         className={classes.useridInput}
//         placeholder='Select'
//         IconComponent={KeyboardArrowDown}
//       >
//         {optionElements}
//       </Select>
//     </div>
//   );
// };
