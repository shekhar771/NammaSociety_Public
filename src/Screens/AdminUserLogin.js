import React, { useState } from 'react';
import { InnerDisplay, CustomPaper, HighLight } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SubHeader from '../Components/SubHeader';
import '../Css/AdminUserLogin.css';
// import SocietyInfo from './SocietyInfo.js';
import ADLTable from '../Components/ADLTable.js';
// import ModifyButton from '../Components/ModifyButton';
import BillingDetails from './BillingDetails.js';

const SocietyModify = () => {
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
        <div>Admin</div>
        <div className='selectBtn'>
        <div  onClick={() => handleSubBody(1)}>
          <SubHeader  barname={'Level 1'} openStatus={subBody[1]} />
        </div>
        {subBody[1] && <ADLTable/>}
        <div onClick={() => handleSubBody(2)}>
          <SubHeader barname={'Level 2'} openStatus={subBody[2]}/>
        </div>
        {subBody[2] && <ADLTable />}
        <div  onClick={() => handleSubBody(3)}>
          <SubHeader barname={'Level 3'} openStatus={subBody[3]} /> 
        </div>
        {subBody[3] && <ADLTable />}
        <div  onClick={() => handleSubBody(4)}>
          <SubHeader barname={'Society Group'} openStatus={subBody[4]}/>
        </div>
        {subBody[4] && <ADLTable />}
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default SocietyModify;
