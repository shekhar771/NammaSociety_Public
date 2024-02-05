import React, { useState } from 'react';
import { CustomPaper, HighLight, InnerDisplay } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs';
import SocietyInfo from './SocietyInfo';
import { getDatabase, ref, set, push } from 'firebase/database';
import { database } from '../Firebase/firebaseConfig';
import AlertDialog from '../Components/DialogueBox';
import '../Css/Component.css';
import CustomButton from '../Components/CustomButton';

const showTxt1 = 'Submit form ?';
const showTxt2 = 'You are about to submit the form porceed ?';
const CreateSociety = () => {
  const db = getDatabase();
  const socKey = push(ref(db, 'societies')).key;
  const socInfoRef = ref(db, 'societies/' + socKey);
  const socNameRef = ref(db, 'societyNames/' + socKey);

  // const socInfoRef = push(ref(db,'societies'))
  // const socNameRef = ref(db,'societyNames/'+socInfoRef.key)
  const [SocForm, setSocForm] = useState('');
  const fieldStatus = Array(16).fill(false);
  const getSocForm = (socInfo) => {
    setSocForm(socInfo);
  };
  const SocietyCreate = () => {
    set(socInfoRef, {
      CompanyName: SocForm.CompanyName,
      SocietyName: SocForm.SocietyName,
      Address: SocForm.Address,
      StampNo: SocForm.StampNo,
      SocietyMobileNo: SocForm.SocietyMobileNo,
      RegistrationNo: SocForm.RegistrationNo,
      BillingSignatory: SocForm.BillingSignatory,
      FromEmailID: SocForm.FromEmailID,
      FromPassword: SocForm.FromPassword,
      PAN: SocForm.PAN,
      TAN: SocForm.TAN,
      GST: SocForm.GST,
      GSTRate: SocForm.GSTRate,
      GSTAmount: SocForm.GSTAmount,
      BillingType: SocForm.BillingType,
      CostCenter: SocForm.CostCenter,
    });
    set(socNameRef, {
      Name: SocForm.SocietyName,
    });
    setDialogOpen(false);
  };

  // const validate =()=>{
  //   for (const fieldName in SocForm ){
  //     if (SocForm[fieldName].trim()==''){
  //       const index = Object.keys(SocForm).indexOf(fieldName);
  //       fieldStatus[index] = true
  //     }
  //   }
  //   console.log(fieldStatus)
  // }

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Society'
        link2='Create Society'
        path1='/Home/'
        path2='/Home/UserUnlock'
      />
      <CustomPaper>
        <HighLight KeyWord='Create Society' />
        <SocietyInfo handleNewSoc={getSocForm} errorStatus={fieldStatus} />
      </CustomPaper>
      <div
        style={{
          marginTop: '20px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomButton buttonText='Create Society' onClick={handleClickOpen} />
      </div>
      <AlertDialog
        showTxt1={showTxt1}
        showTxt2={showTxt2}
        btnTxt1={'yes'}
        btnTxt2={'no'}
        btnFnc1={SocietyCreate}
        btnFnc2={handleClose}
        open={dialogOpen}
      />
    </InnerDisplay>
  );
};
export default CreateSociety;
