import React from 'react'
import '../Css/SubHeader.css' 
import { IoTriangleOutline } from "react-icons/io5";
import { Grid } from '@mui/material';
import {ModifyButton} from './CustomButton';
const ADLSubHeader = ({barname , openStatus}) => {

  return (
    <Grid container  className='SubHeadCont'>
      <Grid item xs = {0.2}></Grid>
      <Grid item xs = {10.8} className='SubTxtBox' ><text className='SubHeadtxt'>{barname}</text></Grid>
      <Grid item xs = {1} ><ModifyButton/>
        {
        openStatus === true ?(<IoTriangleOutline style={{transform:'rotate(0deg)'}}/>):(<IoTriangleOutline style={{transform:'rotate(180deg)', color:'green'}}/>) 
      }
      </Grid>
    </Grid>
  )
}

export default ADLSubHeader;
