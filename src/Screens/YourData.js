import React from 'react'
import { CustomPaper, HighLight, InnerDisplay } from '../Components/Wrapper'
import BreadCrumb from '../Components/BreadCrumbs'
import { Grid } from '@mui/material'
import '../Css/YourData.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const DataBtn = ({BtnName , BtnCount}) =>{
    return <Grid container className='DBtnSty'>
        <Grid className='DBtnTxtBx' item xs = {7}><text className='DBtnTxt'>{BtnName}</text></Grid>
        <Grid item xs = {3}><text className='DBtnNum'>{BtnCount}</text></Grid>
        <Grid item xs = {2}><MdKeyboardArrowRight size={"31px"} color='#39386A'/></Grid>
    </Grid>
}


const YourData = () => {
  return (
    <InnerDisplay>
    <BreadCrumb
        link1='Dashboard'
        link2='Your Data'
        path1='/Home/'
        path2='/Home/'
    />
    <CustomPaper>
        <HighLight KeyWord='YOUR DATA'/>

            <div className='BtnContStrip' >
                <Grid item xs = {6}>
                    <DataBtn BtnName = {'Admin Under You'} BtnCount={5}/>
                </Grid>
                <Grid item xs = {6}>
                <DataBtn  BtnName = {'Active Flats'} BtnCount={365}/>
                </Grid>
            </div>
            <div className='BtnContStrip' >
                <Grid item xs = {6}><DataBtn BtnName = {'Active Users'}  BtnCount={410}/></Grid>
                <Grid item xs = {6}><div className='Filler'/></Grid>
            </div>

      
    </CustomPaper>
    </InnerDisplay>
  )
}

export default YourData

