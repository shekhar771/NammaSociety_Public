import React, { useState } from 'react'
import { CustomPaper, HighLight, InnerDisplay } from '../Components/Wrapper'
import BreadCrumb from '../Components/BreadCrumbs'
import SocietyInfo from './SocietyInfo'
import { getDatabase, ref, set , push} from 'firebase/database'
import { database } from '../Firebase/firebaseConfig'
import AlertDialog from '../Components/DialogueBox'
import '../Css/Component.css';
import CustomButton from '../Components/CustomButton';
import { useLocation } from 'react-router-dom'
const showTxt1 = 'Submit form ?'
const showTxt2 = 'You are about to submit the form porceed ?'
const EditSociety = () => {
  const location = useLocation();
  const stateData = location.state;
  // const dataJson ='-Npe0DIBq86lFNDjFH5A'
    const db = getDatabase()
    const socInfoRef = ref(db,'societies/'+stateData)
    const socNameRef = ref(db,'societyNames/'+stateData)
    const [SocForm,setSocForm] = useState('')
    const fieldStatus = Array(16).fill(false)
    const getSocForm =(socInfo)=>{
        setSocForm(socInfo)
      }
    const SocietyEdit =()=> {
        set(socInfoRef,{
          CompanyName: SocForm.CompanyName,
          SocietyName: SocForm.SocietyName,
          Address:SocForm.Address,
          StampNo: SocForm.StampNo,
          SocietyMobileNo:SocForm.SocietyMobileNo,
          RegistrationNo:SocForm.RegistrationNo,
          BillingSignatory:SocForm.BillingSignatory,
          FromEmailID:SocForm.FromEmailID,
          FromPassword:SocForm.FromPassword,
          PAN:SocForm.PAN,
          TAN:SocForm.TAN,
          GST:SocForm.GST,
          GSTRate:SocForm.GSTRate,
          GSTAmount:SocForm.GSTAmount,
          BillingType:SocForm.BillingType,
          CostCenter:SocForm.CostCenter
        })
        set(socNameRef,{
          Name:SocForm.SocietyName
        })
        setDialogOpen(false);
      }

    const [dialogOpen, setDialogOpen] = useState(false)
    const handleClickOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
      console.log(stateData)
    };
    
  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Society'
        link2='Edit Society'
        path1='/Home/Society'
        path2='/Home/Society/EditSociety'/>
        <CustomPaper>
        <HighLight KeyWord='Create Society'/>
        <SocietyInfo handleNewSoc={getSocForm} errorStatus={fieldStatus} uniqId={stateData} />
        </CustomPaper>
        <div
        style={{
          marginTop:"20px",
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"}}
        ><CustomButton buttonText='Edit' onClick={handleClickOpen} /></div>
        <AlertDialog 
          showTxt1={showTxt1} 
          showTxt2= {showTxt2}
          btnTxt1={'yes'} 
          btnTxt2={'no'} 
          btnFnc1={SocietyEdit}
          btnFnc2={handleClose}
          open={dialogOpen} />
    </InnerDisplay>
  )
}

export default EditSociety


// -NpcnoX1HjN2si1fzozMsocieties
// -NpcmSG9rVr2Vudz-UVZ
