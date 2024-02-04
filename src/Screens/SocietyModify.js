import React, { useState } from 'react';
import { InnerDisplay, CustomPaper, HighLight } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SubHeader from '../Components/SubHeader';
import '../Css/SocGL.css';
import SocietyInfo from './SocietyInfo.js';
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
        link2='User Info'
        path1='/Home/'
        path2='/Home/'
      />
      <CustomPaper>
        <HighLight KeyWord='Modify Society' />
        <div className='selectBtn' onClick={() => handleSubBody(1)}>
          <SubHeader barname={'Society Information'} openStatus={subBody[1]} />
        </div>
        {subBody[1] && <SocietyInfo handleNewSoc={getSocForm} />}
        <div className='selectBtn' onClick={() => handleSubBody(2)}>
          <SubHeader
            barname={'Interest Details for Billing'}
            openStatus={subBody[2]}
          />
        </div>
        {subBody[2] && <BillingDetails />}
      </CustomPaper>
    </InnerDisplay>
  );
};

export default SocietyModify;
