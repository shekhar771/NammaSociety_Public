import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { MdManageAccounts } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { ImBooks } from 'react-icons/im';
import { TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdSpaceDashboard } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Style from '../Css/HomeScreen.module.css';
import ApBarStyle from '../Css/Toolbar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Dashboard from './Dashboard';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useNavigate, createSearchParams } from "react-router-dom";
// import { getDatabase, ref, get, child } from "firebase/database";
// import { useState,useRef } from "react";

const drawerWidth = 320;
var DrawerClose = 0;

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

// const MainContent = styled('div')({
//   flex: 1,
//   backgroundColor: "#212121",
// });

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [pgWidth, setPgWidth] = React.useState(
    parseInt(window.innerWidth - parseInt(theme.spacing(7)) - 1)
  );
  const [hide, setHide] = React.useState('none');
  const windowSize = React.useRef([window.innerWidth]);

  const handleDrawer = () => {
    if (open == true) {
      HandlePgWidth(open);
      setOpen(false);
      setHide('none');
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
          <div className={Style.logoBox}></div>
          <text style={{ display: hide }} className={ApBarStyle.font}>
            Namma Society
          </text>
        </div>
        <Divider />

        <text
          style={{ marginTop: '10px', pacity: open ? 1 : 0 }}
          className={Style.menutxt}
        >
          MENU
        </text>

        <div className={Style.SearchBox}>
          <IconButton>
            <FaMagnifyingGlass style={{ height: '20px' }} />
          </IconButton>

          <input
            placeholder='Search'
            label='Search '
            InputProps={{
              type: 'search',
            }}
            className={Style.inputFeild}
            style={{ display: hide }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>

        <List>
          {[
            'Dashboard',
            'Administrator',
            'Society',
            'Operations',
            'Reports',
            'Utility',
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? (
                    <MdSpaceDashboard />
                  ) : index === 1 ? (
                    <MdManageAccounts />
                  ) : index === 2 ? (
                    <HiBuildingOffice2 />
                  ) : index === 3 ? (
                    <FaScrewdriverWrench />
                  ) : index === 4 ? (
                    <ImBooks />
                  ) : index === 5 ? (
                    <FaScrewdriverWrench />
                  ) : (
                    <MdAdminPanelSettings />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div style={{ width: pgWidth, overflow: 'hidden' }} component='main'>
        <div className={Style.DisplayBox}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
