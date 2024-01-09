//For main paper
import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Style from '../Css/Component.module.css';

//Use UserUnlock as an example

//Title tag
export const HighLight = ({ KeyWord }) => {
  return <div className={Style.highLight}>{KeyWord}</div>;
};
// Main body the 1st tag
export const MainBody = ({ children }) => {
  return <div className={Style.body}>{children}</div>;
};

//Paper module

const Pager = ({ children }) => {
  return (
    <Stack direction='row' spacing={2}>
      {children}
    </Stack>
  );
};
export default Pager;

export const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '80vw',
  // never add height or code will break
  minHeight: '90vh',
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)',
  marginBottom: '10vh',
  borderRadius: '3vh',
  boxSizing: 'border-box',
  padding: '3vh 5.5vh',
}));
