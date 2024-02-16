import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import BreadCrumb from '../Components/BreadCrumbs.js';
import {
  InnerDisplay,
  CustomPaper,
  SubBodyDisplay,
} from '../Components/Wrapper.js';
import TextField from '@mui/material/TextField';
import '../Css/SocietyInfo.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import { getDatabase, onValue, ref } from 'firebase/database';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig.js';

const SocietyInfo = ({ handleNewSoc, errorStatus, uniqId }) => {
  const [formData, setFormData] = useState({
    CompanyName: '',
    SocietyName: '',
    Address: '',
    StampNo: '',
    SocietyMobileNo: '',
    RegistrationNo: '',
    BillingSignatory: '',
    FromEmailID: '',
    FromPassword: '',
    PAN: '',
    TAN: '',
    GST: '',
    GSTRate: '',
    GSTAmount: '',
    BillingType: '',
    CostCenter: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'societies', uniqId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (uniqId) {
      fetchData();
    }
  }, [uniqId]);

  useEffect(() => {
    handleNewSoc(formData);
  }, [formData, handleNewSoc]);


  return (
    <SubBodyDisplay>
      <Grid container spacing={2}>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Company Name :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField
            // error = {errorStatus[0]}
            type='text'
            onChange={handleInputChange}
            name='CompanyName'
            value={formData.CompanyName}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Society Name :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField
            // error = {errorStatus[1]}
            type='text'
            name='SocietyName'
            onChange={handleInputChange}
            value={formData.SocietyName}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Address :</text>
        </Grid>
        <Grid item xs={9}>
          <TextField
            // error = {errorStatus[2]}
            name='Address'
            type='text'
            onChange={handleInputChange}
            value={formData.Address}
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
          <TextField
            // error = {errorStatus[3]}
            name='StampNo'
            type='text'
            onChange={handleInputChange}
            value={formData.StampNo}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Society Mobile No :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[4]}
            name='SocietyMobileNo'
            type='int'
            onChange={handleInputChange}
            value={formData.SocietyMobileNo}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Registration No:</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[5]}
            name='RegistrationNo'
            type='text'
            onChange={handleInputChange}
            value={formData.RegistrationNo}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Billing Signatory :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[6]}
            name='BillingSignatory'
            type='text'
            onChange={handleInputChange}
            value={formData.BillingSignatory}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>From Email ID :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[7]}
            name='FromEmailID'
            type='text'
            onChange={handleInputChange}
            value={formData.FromEmailID}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>From Password :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[8]}
            name='FromPassword'
            type='text'
            onChange={handleInputChange}
            value={formData.FromPassword}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>PAN :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[9]}
            name='PAN'
            type='text'
            onChange={handleInputChange}
            value={formData.PAN}
            fullWidth
            id='outlined-basic'
            variant='outlined'
            helperText={''}
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>TAN :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[10]}
            name='TAN'
            type='text'
            onChange={handleInputChange}
            value={formData.TAN}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[11]}
            name='GST'
            type='text'
            onChange={handleInputChange}
            value={formData.GST}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST Rate :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[12]}
            name='GSTRate'
            type='text'
            onChange={handleInputChange}
            value={formData.GSTRate}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>GST Amount :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[13]}
            name='GSTAmount'
            type='text'
            onChange={handleInputChange}
            value={formData.GSTAmount}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Billing Type :</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[14]}
            name='BillingType'
            type='text'
            onChange={handleInputChange}
            value={formData.BillingType}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3} className='TxtGrid'>
          <text className='SocInfoTxt'>Cost Center:</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            // error = {errorStatus[15]}
            name='CostCenter'
            type='text'
            onChange={handleInputChange}
            value={formData.CostCenter}
            fullWidth
            id='outlined-basic'
            variant='outlined'
          />
        </Grid>
      </Grid>
    </SubBodyDisplay>
  );
};

export default SocietyInfo;
