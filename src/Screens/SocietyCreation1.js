import * as React from 'react';
// import Style from '../Css/UserUnlock.module.css';
import '../Css/Component.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Typography,
  Container,
  Box,
  Button,
  Grid,
} from '@mui/material';
import '../Css/Component.css';
import CustomButton from '../Components/CustomButton';
import { HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
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

//sadkdjawdfnsadfsejm,
//diaogueimports======
import AlertDialog from '../Components/DialogueBox.js';
import { DialerSip } from '@mui/icons-material';
import { CustomizedTables3 } from '../Components/Table.js';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig.js';

const showTxt = 'Are you sure you wanna Submit this form';

const SocietyCreation = () => {
  const navigate = useNavigate();
  const [DbSoc, setDbSoc] = useState(''); 
  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        // const querySnapshot = await getDocs(collection(firestore, 'societies')); // Fetch 'Society' collection
        // const societiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // setSocieties(societiesData);

        const querySnapshot = await getDocs(collection(db, 'societies')); // Fetch 'Society' collection
        const societiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSocieties(societiesData);
      } catch (error) {
        console.error('Error fetching societies:', error);
      }
    };

    fetchSocieties();
  }, []);

const handleButtonClick = () => {
  navigate('/Home/SocietyCreate');
};
 

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2=' Society'
        path1='/Home/'
        path2='/Home/SocietyCreation'
      />
      <CustomPaper>
        <HighLight KeyWord=' SOCIETY' />

        <Grid sx={{ marginBottom: '30px' }} width={'96%'} container spacing={2}>
          <Grid item xs={2} className='TxtGrid'>
            <text className='SocInfoTxt'>Societies:</text>
          </Grid>

          <Grid item xs={10}>
            <CustomSearchAuto />
          </Grid>
        </Grid>
        <CustomizedTables3 />
        <div className='buttonses'>
          <CustomButton
            buttonText='Add New Society'
            onClick={handleButtonClick}
          />
        </div>
      </CustomPaper>
      <Stack direction='row' spacing={2}></Stack>
    </InnerDisplay>
  );
};
export default SocietyCreation;
