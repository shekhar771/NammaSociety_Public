import React from 'react'
import '../Css/SubHeader.css' 
import { BiSolidDownArrow } from "react-icons/bi";
// import { IoTriangleOutline } from "react-icons/io5";
import { Grid } from '@mui/material';
const SubHeader = ({barname , openStatus}) => {

  return (
    <Grid container  className='SubHeadCont'>
      <Grid item xs = {0.2}></Grid>
      <Grid item xs = {10.8} className='SubTxtBox' ><text className='SubHeadtxt'>{barname}</text></Grid>
      <Grid item xs = {1} >
        {
          openStatus === true ?(<BiSolidDownArrow style={{transform:'rotate(0deg)', }}/>):(<BiSolidDownArrow  style={{transform:'rotate(180deg)', color:'#39A930'}}/>) 
      }
      </Grid>
    </Grid>
  )
}

export default SubHeader
