import React, { useEffect, useState } from 'react';
//----------Custom components------
import CustomButton from '../Components/CustomButton';
import { HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
import BreadCrumb from '../Components/BreadCrumbs.js';
import CustomInput, { CustomInputPassword } from '../Components/Input.js';
import CustomSelect from '../Components/InputSelect.js';
//----------Css------
import '../Css/Component.css';
// Import your Firebase Firestore or Realtime Database instance

//----------firebase imports------

import {
  //   createUserWithEmailAndPassword, -->to be added later
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  //   GoogleAuthProvider,
  //   signInWithPopup,
} from 'firebase/auth';
// import { getAuthHeaders } from '../userAuth/UserAuth.js';
import { useUserAuth } from '../userAuth/UserAuth';
import { auth } from '../Firebase/firebaseConfig.js';

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
    handleInputChange('userType', event);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    handleInputChange('userAccessLevel', event);
  };
  const { user } = useUserAuth();

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(formData));
      console.log(`Bearer ${await user.getIdToken()}`);
      // Make a secure request to the backend API
      const response = await fetch('http://localhost:3005/userInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await user.getIdToken()}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Create user with email and password
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       formData.userName,
  //       formData.password
  //     );
  //     // const uida = userCredential.user.uid;
  //     const uid = userCredential.user.uid;
  //     // Assign selected role to the user
  //     const userRolesRef = ref(db, 'Users');
  //     const userRolesData = {
  //       UserId: formData.userId,
  //       role: formData.userType,
  //       uid: uid, // Use uid as the key
  //     };
  //     set(child(userRolesRef, uid), userRolesData); // Set data with uid as the key

  //     // Update additional permissions if the role is admin
  //     // if (formData.userType === 'Admin' || formData.userType === 'Superadmin') {
  //     const additionalPermissionsRef = ref(db, 'additionalPermissions');
  //     const adminPermissions = {
  //       canChangeColor: {
  //         [uid]: true,
  //       },
  //       canChangeBuildingNo: {
  //         [uid]: true,
  //       },
  //     };
  //     update(additionalPermissionsRef, adminPermissions);

  //     // Reset form fields
  //     setFormData({
  //       userId: '',
  //       userName: '',
  //       password: '',
  //       userType: '',
  //       userAccessLevel: '',
  //     });
  //     setErrorMessage('');
  //     console.log('Success');
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2='UserInfo'
        path1='/Home/'
        path2='/Home/UserInfo'
      />
      <CustomPaper>
        <HighLight KeyWord='USER INFO' />
        <CustomInput
          label='User ID:'
          placeholder='Saroja_9827'
          onChange={(event) => handleInputChange('userId', event)}
        />
        <div></div>
        <CustomInput
          label='User Name:'
          placeholder='Saroja'
          onChange={(value) => handleInputChange('userName', value)}
        />
        <div></div>
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

        <div className='buttonses'>
          <CustomButton buttonText='Add User' onClick={handleSubmit} />
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default UserInfo;
