import React, { useState } from 'react';
import { InnerDisplay, CustomPaper, HighLight } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SubHeader from '../Components/SubHeader';
import '../Css/SocGL.css';
import {AcGTable} from '../Components/Table.js'
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
        link2='Accounting Group'
        path1='/Home/'
        path2='/Home/'
      />
      <CustomPaper>
        <HighLight KeyWord='Accounting Group' />
        <div className='selectBtn' onClick={() => handleSubBody(1)}>
          <SubHeader barname={'Assets'} openStatus={subBody[1]} />
        </div>
        {subBody[1] && <AcGTable/>}
        <div className='selectBtn' onClick={() => handleSubBody(2)}>
          <SubHeader barname={'Liability'} openStatus={subBody[2]}/>
        </div>
        {subBody[2] && <AcGTable />}
        <div className='selectBtn' onClick={() => handleSubBody(3)}>
          <SubHeader barname={'Income'} openStatus={subBody[3]} />
        </div>
        {subBody[3] && <AcGTable/>}
        <div className='selectBtn' onClick={() => handleSubBody(4)}>
          <SubHeader barname={'Expenditure'} openStatus={subBody[4]}/>
        </div>
        {subBody[4] && <AcGTable />}
      </CustomPaper>
    </InnerDisplay>
  );
};

export default AccountingGroup;

