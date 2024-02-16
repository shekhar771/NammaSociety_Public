import React, { useState } from 'react';
import { InnerDisplay, CustomPaper, HighLight } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import ADLSubHeader from '../Components/ADLSubHeader.js';
import '../Css/AdminUserLogin.css';
import {ADLTable} from '../Components/Table.js';
import CustomButton from '../Components/CustomButton.js';
import BillingDetails from './BillingDetails.js';

const AdminUserLogin = () => {
  const [subBody, setSubBody] = useState(Array(2).fill(false));

  const handleSubBody = (index) => {
    setSubBody((prevSubBody) => {
      const newSubBody = [...prevSubBody];
      newSubBody[index] = !newSubBody[index];
      return newSubBody;
    });
  };
  const [SocForm,setSocForm] = useState('')
  const getSocForm =(socInfo)=>{
    setSocForm(socInfo)
  }
  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2='Admin and User Login'
        path1='/Home/'
        path2='/Home/'
      />
      <CustomPaper>
        <HighLight KeyWord='Admin and User Login' />
        <div className='adminHeader'>Admin</div>
        <div className='selectBtn'>
        <div  onClick={() => handleSubBody(1)}>
          <ADLSubHeader barname={'Level 1'} openStatus={subBody[1]} />
        </div>
        {subBody[1] && <ADLTable/>}
        <div onClick={() => handleSubBody(2)}>
          <ADLSubHeader barname={'Level 2'} openStatus={subBody[2]}/>
        </div>
        {subBody[2] && <ADLTable />}
        <div  onClick={() => handleSubBody(3)}>
          <ADLSubHeader barname={'Level 3'} openStatus={subBody[3]} /> 
        </div>
        {subBody[3] && <ADLTable />}
        <div onClick={() => handleSubBody(4)}>
          <ADLSubHeader barname={'Society Group'} openStatus={subBody[4]}/>
        </div>
        {subBody[4] && <ADLTable />}
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default AdminUserLogin;
