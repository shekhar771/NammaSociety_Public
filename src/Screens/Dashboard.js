import React, { useEffect } from 'react'
import '../Css/Dashboard.css'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { List } from '@mui/material';
import { BsBuildingFill } from "react-icons/bs";
import { useUserAuth } from "../userAuth/UserAuth";
import { getDataGridUtilityClass } from '@mui/x-data-grid';
import { getDatabase , ref, child, onValue} from 'firebase/database';

const Dashboard = ({username , userType, adminStatus}) => {

  const [building, setBuilding] = React.useState('');
  const [financialYr, setYear] = React.useState('');
  const handleBuinding = (event) => {
      setBuilding(event.target.value);
  };
  const handleYear =(event)=>{
      setYear(event.target.value)
  }
  const [db_Socs,setDbSoc] = React.useState([])
  const db =  getDatabase();
  const Soc_list = ref(db ,'Society/' );

  useEffect(()=>{
    onValue(Soc_list,(snapshot)=>{
      const data  =  snapshot.val()
      setDbSoc(data)
    })
  },[])
  const [seleSoc ,setSeleSoc ] = React.useState("")
  const handlSeleSoc =(event)=>{
    setSeleSoc(event.target.value)
  }


  return (
    <div className='DashboardBox'>
      <div className='infoBar' >
        <div style={{flexDirection:"row"}} className= 'infoBox'>
          <BsBuildingFill size={30}/>
            <FormControl  fullWidth>
            <Select
            sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 },fontSize:"23px", fontWeight:"bold"}}
            className='BuildingSelect'
            value={seleSoc}
            label="Age"
            onChange={handlSeleSoc}
            >
                {(Object.keys(db_Socs)).map((text,index)=>(<MenuItem value = {index} >{text}</MenuItem>))}
            </Select>
          </FormControl>
        </div>
        <div  style={{flexDirection:"column"}}className= 'infoBox'>
        <FormControl fullWidth>
            <Select
            sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 } , fontWeight:"bold", fontSize:"18px"}}
            className='FinYrSelect'
            value={financialYr}
            onChange={handleYear}
            >
              <MenuItem value={10}>2022-2023</MenuItem>
              <MenuItem value={20}>2021-2022</MenuItem>
              <MenuItem value={30}>2020-2021</MenuItem>
            </Select>
            <text className='subHeadertxt'>
              Financial Year
            </text>
          </FormControl>
        </div>
        <div className='Name-type-logo' >
        <div style={{flexDirection:"column"}} className= 'Name-type'>
            <text className='Headertxt'>
                {username}
            </text>
            <text className='userType'>
                {userType}
            </text>
        </div>
        <div className='typeLogo'></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
