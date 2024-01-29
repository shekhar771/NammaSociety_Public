import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BreadCrumb from '../Components/BreadCrumbs.js';
import {
  InnerDisplay,
  CustomPaper,
  SubBodyDisplay,
} from '../Components/Wrapper.js';
import TextField from '@mui/material/TextField';
import '../Css/SocietyInfo.css';

import { getAuthHeaders } from '../userAuth/UserAuth.js';

function SocietyInfo() {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    password: '',
  });

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  return (
    <SubBodyDisplay>
      <Grid container spacing={2}>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Company Name :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Society Name :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Address :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            id='filled-multiline-flexible'
            multiline
            rows={3}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Society Stamp No :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Society Mobile No :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Registration No:</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Billing Signatory :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>From Email ID :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>From Password :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>PAN :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>TAN :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST Rate :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST Amount :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Billing Type :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Cost Center:</text>
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id='outlined-basic' variant='outlined' />
        </Grid>
      </Grid>
    </SubBodyDisplay>
  );
}

export default SocietyInfo;
