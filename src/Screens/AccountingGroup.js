import React, { useState } from 'react';
import { InnerDisplay, CustomPaper, HighLight } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SubHeader from '../Components/SubHeader';
import '../Css/AccountingGroup.css';
// import SocietyInfo from './SocietyInfo.js';
import AcGTable from '../Components/AcGTable.js';
// import ModifyButton from '../Components/ModifyButton';
import BillingDetails from './BillingDetails.js';

const AccountingGroup = () => {
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
        link2='Accounting Groups'
        path1='/Home/'
        path2='/Home/'
      />
      <CustomPaper>
        <HighLight KeyWord='Accounting Groups' />
        <div className='selectBtn'>
        <div  onClick={() => handleSubBody(1)}>
          <SubHeader  barname={'Assets'} openStatus={subBody[1]} />
        </div>
        {subBody[1] && <AcGTable/>}
        <div onClick={() => handleSubBody(2)}>
          <SubHeader barname={'Liability'} openStatus={subBody[2]}/>
        </div>
        {subBody[2] && <AcGTable />}
        <div  onClick={() => handleSubBody(3)}>
          <SubHeader barname={'Income'} openStatus={subBody[3]} /> 
        </div>
        {subBody[3] && <AcGTable />}
        <div onClick={() => handleSubBody(4)}>
          <SubHeader barname={'Expenditure'} openStatus={subBody[4]}/>
        </div>
        {subBody[4] && <AcGTable />}
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default AccountingGroup;
