import React, { useState } from 'react';
import { CustomPaper, HighLight, InnerDisplay } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs';
import SocietyInfo from './SocietyInfo';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig';
import AlertDialog from '../Components/DialogueBox';
import CustomButton from '../Components/CustomButton';
import { useLocation } from 'react-router-dom';

const showTxt1 = 'Submit form ?';
const showTxt2 = 'You are about to submit the form proceed ?';

const EditSociety = () => {
  const location = useLocation();
  const stateData = location.state;
  // const db = firestore();
  const socInfoRef = doc(db, 'societies', stateData);
  const socNameRef = doc(db, 'societyNames', stateData);
  const [SocForm, setSocForm] = useState('');
  const fieldStatus = Array(16).fill(false);

  const getSocForm = (socInfo) => {
    setSocForm(socInfo);
  };

  const SocietyEdit = async () => {
    try {
      await setDoc(socInfoRef, SocForm); // Set the entire document
await setDoc(socNameRef, { Name: SocForm.societyNames }); // Set only the 'Name' field
      setDialogOpen(false);
    } catch (error) {
      console.error('Error editing society:', error);
    }
  };


  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
    console.log(stateData);
  };

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Society'
        link2='Edit Society'
        path1='/Home/Society'
        path2='/Home/Society/EditSociety'
      />
      <CustomPaper>
        <HighLight KeyWord='Create Society' />
        <SocietyInfo handleNewSoc={getSocForm} errorStatus={fieldStatus} uniqId={stateData} />
      </CustomPaper>
      <div
        style={{
          marginTop: '20px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton buttonText='Edit' onClick={handleClickOpen} />
      </div>
      <AlertDialog
        showTxt1={showTxt1}
        showTxt2={showTxt2}
        btnTxt1={'yes'}
        btnTxt2={'no'}
        btnFnc1={SocietyEdit}
        btnFnc2={handleClose}
        open={dialogOpen}
      />
    </InnerDisplay>
  );
};

export default EditSociety;
