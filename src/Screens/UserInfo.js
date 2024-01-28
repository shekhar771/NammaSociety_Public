import React, { useEffect, useState } from 'react';
//----------Custom components------
import CustomButton from '../Components/CustomButton';
import { HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
import BreadCrumb from '../Components/BreadCrumbs.js';
import CustomInput, { CustomInputPassword } from '../Components/Input.js';
import CustomSelect from '../Components/InputSelect.js';
//----------Css------
import '../Css/Component.css';

//----------firebase imports------
import { getDatabase, ref, onValue } from 'firebase/database';
import { useUserAuth } from '../userAuth/UserAuth';

const UserInfo = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const options = ['Admin', 'Society User'];
  const options2 = ['Level 1', 'Level 2', 'Level 3'];

  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    password: '',
    userType: '',
    userAccessLevel: '',
  });
  //This is for Custom Button To input
  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  //This is for options
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  //Send to the backend
  const handleSubmit = async () => {
    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const response = await fetch('your-backend-endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('Data sent successfully');
    //   } else {
    //     console.error('Failed to send data');
    //   }
    // } catch (error) {
    //   console.error('Error during data submission:', error);
    // }
  };

  // const { user } = useUserAuth();
  // useEffect(()=>{
  //   const db = getDatabase();
  //   const info = ref(db, 'users/'+ user.uid);
  //   onValue(info, (snapshot)=>{
  //     const data = snapshot.val()
  //     console.log(data)
  //   })
  // })

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Society'
        link2='Society'
        path1='/Home/'
        path2='/Home/'
      />
      <CustomPaper>
        <HighLight KeyWord='USER INFO' />
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        <CustomInput
          label='User ID:'
          placeholder='Saroja_9827'
          onChange={(event) => handleInputChange('userId', event)}
        />
        <CustomInput
          label='User Name:'
          placeholder='Saroja'
          onChange={(value) => handleInputChange('userName', value)}
        />
        <CustomInputPassword
          label='Password:'
          placeholder='******'
          onChange={(value) => handleInputChange('password', value)}
        />
        <CustomSelect
          placeholder='Placeholder'
          options={options}
          onChange={handleChange}
          value={selectedOption}
          label='User Type:'
        />
        <CustomSelect
          options={options2}
          onChange={handleChange2}
          value={selectedOption2}
          label='User Access Level:'
        />
        {/* </div> */}

        <div className='buttonses'>
          <CustomButton buttonText='Add User' onClick={handleSubmit} />
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default UserInfo;
