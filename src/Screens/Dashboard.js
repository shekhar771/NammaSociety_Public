import React from 'react'
import Style from '../Css/Dashboard.module.css'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { List } from '@mui/material';

const Dashboard = () => {
  const [building, setBuilding] = React.useState('');
  const [financialYr , setYear] = React.useState('')
  const handleBuinding = (event) => {
    setBuilding(event.target.value);
  };
const handleYear =(event)=>{
    setYear(event.target.value)
}
  return (
    <div className={Style.DashboardBox}>
      <div className={Style.infoBar} >
        <div className= {Style.infoBox}>
            <FormControl fullWidth>
            <InputLabel >Building</InputLabel>
            <Select
            value={building}
            label="Age"
            onChange={handleBuinding}
            >
                {['b1','b2','b3'].map((text,index)=>(<MenuItem>{text}</MenuItem>))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            </FormControl>
        </div>
        <div className= {Style.infoBox}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Building</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={financialYr}
            label="Age"
            onChange={handleBuinding}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div className= {Style.infoBox}>
            <text>
                username 
            </text>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
