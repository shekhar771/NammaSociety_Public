import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BreadCrumb from '../Components/BreadCrumbs.js';
import {SubBodyDisplay } from '../Components/Wrapper.js';
import TextField from '@mui/material/TextField';
import '../Css/SocietyInfo.css'
import { FormControl, MenuItem, Select } from '@mui/material';


const YNselComp = ({handleClk, showValue})=>{
    return (
    <FormControl fullWidth>
        <Select 
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value ={showValue}
        onChange={handleClk} >
            {['yes', 'no'] .map((text, index)=>(<MenuItem value ={text}>{text}</MenuItem>))}
        </Select>
    </FormControl> 
    );
};

const BillingDetails = ()=> {
    const [interest, setInterest] = useState("")
    const [IOI, setIoI] = useState("")
    const [IOOB, setIOOB] = useState("")
    const [fine, setFine] = useState("")
    const [IAYN, setIAYN] = useState("")

    const handleInterest  = (event) =>{
        setInterest(event.target.value)
    }
    const handleIOI  = (event) =>{
        setIoI(event.target.value)
    }
    const handleIOOB  = (event) =>{
        setIOOB(event.target.value)
    }
    const handleFine  = (event) =>{
        setFine(event.target.value)
    }
    const handleIAYN  = (event) =>{
        setIAYN(event.target.value)
    }

    
  return (
    <SubBodyDisplay>
        <Grid container spacing={2}>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest :</text></Grid>
            <Grid item xs={3}><YNselComp handleClk = {handleInterest} showValue = {interest} /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest on Interest :</text></Grid>
            <Grid item xs={3}><YNselComp handleClk = {handleIOI} showValue = {IOI} /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest Calculation :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic"  variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest Type :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic" variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Due Days :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic" variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Grace Days:</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic" variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='longTxt'>Outstanding balance Interest:</text></Grid>
            <Grid item xs={3}><YNselComp handleClk = {handleIOOB} showValue = {IOOB} /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Rate of Interest :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic"  variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest Lumpsum :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic"  variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='longTxt'>Lumpsum on Outstanding amount :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic"  variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Fine :</text></Grid>
            <Grid item xs={3}><YNselComp handleClk = {handleFine} showValue = {fine} /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Fine Amount :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic" variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Fine on Interest Amount :</text></Grid>
            <Grid item xs={3}><TextField fullWidth id="outlined-basic"  variant="outlined" /></Grid>
            <Grid item xs={3} className='TxtGrid'><text className='SocInfoTxt'>Interest Adjust YN :</text></Grid>
            <Grid item xs={3}><YNselComp handleClk = {handleIAYN} showValue = {IAYN} /></Grid>
        </Grid>
    </SubBodyDisplay>
  )
}

export default BillingDetails;