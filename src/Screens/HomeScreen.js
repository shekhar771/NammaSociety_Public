import * as React from 'react';
//-----Drawer imports---------//
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
//-----Drawer icon imports---------//
import { MdManageAccounts } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { ImBooks } from 'react-icons/im';
import { MdSpaceDashboard } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoIosLogOut } from "react-icons/io";
//-----Css imports---------//
import '../Css/HomeScreen.css';
//-----Component import---------//
import ApBarStyle from '../Css/Toolbar.module.css';
import Dashboard from './Dashboard';
//-----Navigation import---------//
import { useNavigate, useLocation } from "react-router-dom";
// ---- pages import ------------userlock is working properly
import SocGL from './SocGL';
import UserUnlock from './UserUnlock';
import UserInfo from './UserInfo';
import AccountingGroup from './AccountingGroup';
import AdminUserLogin from './AdminUserLogin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SocietyInfo from './SocietyInfo';
import SocietyModify from './SocietyModify';
import BillingDetails from './BillingDetails';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useNavigate, createSearchParams } from "react-router-dom";
// import { getDatabase, ref, get, child } from "firebase/database";
// import { useState,useRef } from "react";
//-----LogOut dialogue Box---------//
import { useUserAuth } from "../userAuth/UserAuth";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect } from 'react';


import { AdminInnList , SocietyInList, OperaInList, RepoInList, UtilInList } from '../Components/Wrapper';

const drawerWidth = 320;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const HomeScreen = () => {
  const { user, logOut } = useUserAuth();
  const [outAlert, setAlert] =  React.useState(false);
  //=========Manage navigation and user info==========//
  const location = useLocation()
  // const data = location.state;
  const dataJson = JSON.parse(location.state)
  const navigate = useNavigate();
//==============get user data ==================//

const [UserObj , setUserObj] = React.useState([])
const db = getDatabase();
const ann = ref(db, "Users/" + user.uid);
useEffect(() => {
    onValue(ann, (snapshot) => {
      const data = snapshot.val();
      setUserObj(data);
    });
  });

//=========Manage drawer and viewBox width==========//
  const theme = useTheme();
  // const [dashData, setDash] = React.useState(JSON.parse(location.state))
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [pgWidth, setPgWidth] = React.useState(parseInt(window.innerWidth - parseInt(theme.spacing(7)) - 1));
  const [hide, setHide] = React.useState('none');
  const windowSize = React.useRef([window.innerWidth]);
  const [openStates, setOpenStates] = React.useState(Array(6).fill(false)); // Initial state, assuming 6 items

  const handleDrawer = () => {
    if (open == true) {
      HandlePgWidth(open);
      setOpen(false);
      setHide('none');
      setOpenStates(Array(6).fill(false))
    }
    if (open == false) {
      HandlePgWidth(open);
      setOpen(true);
      setHide('block');
    }
  };
  const HandlePgWidth = (open) => {
    if (open === true) {
      setPgWidth(parseInt(windowSize.current - parseInt(theme.spacing(7))));
    }
    if (open === false) {
      setPgWidth(windowSize.current - drawerWidth);
    }
  };
  //send
  const auth = getAuth();

  const sendIdTokenToBackend = (idToken) => {
    fetch('http://localhost:3005/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        // Handle the response from the backend if needed
      })
      .catch((error) => {
        console.error('Error sending ID token to backend:', error);
      });
  };

  // React.useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       user.getIdToken().then((idToken) => {
  //         // Send the idToken to your backend
  //         sendIdTokenToBackend(idToken);
  //       });
  //     } else {
  //       // User is signed out
  //       // Handle accordingly
  //     }
  //   });
  // });

//=========Drawer Inner List====================//
 const handleListItem = (index) =>{
  if (open == true)
  {setOpenStates((prevOpenStates) => {
    const newOpenStates = [...prevOpenStates];
    newOpenStates[index] = !newOpenStates[index]; // Toggle the state for the clicked item
    return newOpenStates;});}}

const [CompoVis, setCompVis] = React.useState(Array(4).fill(false))
  const handleItemClick = (index) =>{
    setCompVis(Array(4).fill(false))
    setCompVis((preItemState) =>{
      const newItemStates = [...preItemState];
      newItemStates[index] = !newItemStates[index];
      return newItemStates;}
      )
    }

//==========logout============//
  const handleClickOpen = () => {
    setAlert(true);
    console.log(dataJson)
  };
  const handleClose = () => {
    setAlert(false);
  };
  const handleLogOut = async () => {
  try {
    setAlert(false);
    await logOut();
  } catch (err) {
    console.log(err.message);
  }};
//=========Front-end==========//
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '80px',
            alignItems: 'center',
            marginLeft: '10px',
          }}
          onClick={handleDrawer}
        >
          <div className='logoBox'></div>
          <text style={{ display: hide }} className={ApBarStyle.font}>
            Namma Society
          </text>
        </div>
        <Divider />

        <text
          style={{ marginTop: '10px', pacity: open ? 1 : 0 }}
          className='menutxt'
        >
          MENU
        </text>
        <div className='SearchBox'>
          <IconButton>
            <FaMagnifyingGlass style={{ height: '20px' }} />
          </IconButton>
          <input
            placeholder='Search'
            label='Search '
            InputProps={{
              type: 'search',
            }}
            className='inputFeild'
            style={{ display: hide }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>

        <List>
          {[
            {text:'Dashboard',InList : [<div></div>] },
            {text:'Administrator',InList : [<AdminInnList ListItemClick ={handleItemClick}/>] },
            {text:'Society',InList : [<SocietyInList/>] },
            {text:'Operations',InList : [<OperaInList/>] },
            {text:'Reports',InList : [<RepoInList/>] },
            {text:'Utility',InList : [<UtilInList/>] },
          ].map(({text, InList }, index) => (
            <div>
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>handleListItem(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? (
                    <MdSpaceDashboard
                    size={"20px"}
                    style={{color:"A0A0A0"}}
                    />
                  ) : index === 1 ? (
                    <MdManageAccounts 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  ) : index === 2 ? (
                    <HiBuildingOffice2 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  ) : index === 3 ? (
                    <FaScrewdriverWrench 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  ) : index === 4 ? (
                    <ImBooks 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  ) : index === 5 ? (
                    <FaScrewdriverWrench 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  ) : (
                    <MdAdminPanelSettings 
                    size={"20px"}
                    style={{color:"A0A0A0"}}/>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <Collapse in={openStates[index]} timeout='auto' unmountOnExit>
              {InList}
            </Collapse>
            </div>
          ))}
        </List>
        <div className='LogOutBox' onClick={handleClickOpen} >
        <IoIosLogOut size="20px"/>
        </div>
        
      </Drawer>

      <div style={{ width: pgWidth, overflow: 'hidden' }} component='main'>
        <div id='name' className='DisplayBox'>
          <Dashboard username= {UserObj.UserName} userType={UserObj.Role} adminStatus = {UserObj.UserName}/>
          {CompoVis[0] && <UserInfo/>}
          {CompoVis[1] && <UserUnlock/>}
          {CompoVis[2] && <AccountingGroup/>}
          {CompoVis[3] && <SocietyModify/>}
        </div>
      </div>
      <Dialog
        open={outAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logging Out of Namma society"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Log out ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={{color:"#f00"}} onClick={handleLogOut} autoFocus>
            Log out
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default HomeScreen;