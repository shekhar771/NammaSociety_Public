import React, { useEffect, useState } from 'react';
import { CustomPaper, HighLight, InnerDisplay } from '../Components/Wrapper';
import BreadCrumb from '../Components/BreadCrumbs';
import SocietyInfo from './SocietyInfo';
import { getDatabase, ref, set, push } from 'firebase/database';
import { database } from '../Firebase/firebaseConfig';
import AlertDialog from '../Components/DialogueBox';
import '../Css/Component.css';
import CustomButton from '../Components/CustomButton';
import { getFirestore } from 'firebase/firestore';
import { doc,collection,query, getDocs,setDoc ,addDoc} from "firebase/firestore"; 
import { useUserAuth } from '../userAuth/UserAuth';

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
  const { user } = useUserAuth();
  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(SocForm));
      console.log(`Bearer ${await user.getIdToken()}`);
      // Make a secure request to the backend API
      const response = await fetch('http://localhost:3005/society', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await user.getIdToken()}`,
        },
        body: JSON.stringify(SocForm),
      }
      )

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  // Initialize Firestore instance
// const db = getFirestore();
//   const SocietyCreate = async () => {
//     try {
      
      
//     const docRef = await addDoc(collection(db, "societies"), SocForm);
   
//     const socId = docRef.id;

//     // Create a document in the 'societyNames' collection with the society ID
//     await setDoc(doc(db, "societyNames", socId), { Name: SocForm.SocietyName });


//     handleSubmit(socId);
    
//       setDialogOpen(false);
//     } catch (error) {
//       console.error('Error creating society:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//  ;
//     const querySnapshot = await getDocs(collection(db, "societies"));
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, ' => ', doc.data());
//     });
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//   }
// };

// fetchData();
//   }, []);

//ake sure to include db in the dependency array to avoid useEffect dependencies warning

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
        btnFnc1={() => handleSubmit(SocForm)}
        btnFnc2={handleClose}
        open={dialogOpen}
      />
    </InnerDisplay>
  );
};
export default CreateSociety;
