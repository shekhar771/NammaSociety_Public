import * as React from 'react';
// import Style from '../Css/UserUnlock.module.css';
import '../Css/Component.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Container, Box, Button, Grid } from '@mui/material';
import '../Css/Component.css';
import CustomButton from '../Components/CustomButton';
import {  HighLight,InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
import Pager from '../Components/Wrapper.js';
import Stack from '@mui/material/Stack';
import BreadCrumb from '../Components/BreadCrumbs.js';
import { useState } from 'react';
import CustomSubHeader from '../Components/SubHeader';
import {
  CustomTextField,
  CustomSearchAuto,
  CustomTextFieldAddress,
  CustomTextField2,
  CustomTextField3,
} from '../Components/InputSelectSoc.js';
import '../Css/SocietyInfo.css';
import { getDatabase , ref, onValue} from 'firebase/database';
//sadkdjawdfnsadfsejm,
//diaogueimports======
import AlertDialog from '../Components/DialogueBox.js';
import { DialerSip } from '@mui/icons-material';

const showTxt = 'Are you sure you wanna Submit this form'

const SocietyCreation = () => {
  const navigate = useNavigate();
  const db = getDatabase()
  const [DbSoc,setDbSoc] = useState('')

  const Soc_List =  ref(db,'Society/');
  useEffect(()=>{
    onValue(Soc_List,(snapshot)=>{
      const data  =  snapshot.val()
      setDbSoc(data)
    })
  },[])

  const handleButtonClick = () => {
    // Redirect to another page
    //add society option here
    navigate('/Home/SocietyCreate');};

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2=' Society'
        path1='/Home/'
        path2='/Home/SocietyCreation'
      />
        <Stack style={{ width: '100%' }} direction='row' spacing={2}>
          <CustomPaper >
            <HighLight KeyWord=' SOCIETY' />

            <Grid sx={{marginBottom:'30px'}} width={'96%'} container spacing={2}>
                <Grid item xs ={2} className='TxtGrid' ><text className='SocInfoTxt'>Societies:</text></Grid>
                <Grid item xs ={10}><CustomSearchAuto /></Grid>
            </Grid>
            <div className='buttonoses'>
              <CustomButton
                buttonText='Add New Society'
                onClick={handleButtonClick}
              />
            </div>
          </CustomPaper>
        </Stack>
    </InnerDisplay>
  );
};
export default SocietyCreation;