import * as React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import { getDatabase, ref, get, child } from 'firebase/database';
// import SplashScreen from "../assets/SplashScreen.jpg";
import { db } from '../Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseApp, FirebaseError } from 'firebase/app';

const Splash = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const isCalledRef = React.useRef(false);

const navToHome = (details) => {
  navigate("/Home", { state: details });
};
  React.useEffect( () => {
    if (!isCalledRef.current) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const getUsers = async () =>{
            try{
              await(getDocs(collection(db,'Users'))).then((querySnapshot)=>{
                querySnapshot.forEach(doc => {
                  if(doc.id == user.uid){
                    navToHome(doc.data())
                  }
                  else{
                    console.log(user)
                  }
                });
                
              })
             
            }
          catch(error){
            console.log(error)
            }
          }
              // if (userCollection.exists()) {
              //   // const details = JSON.stringify(snapshot.val());
              //   // navToHome(details);
              //   console.log('User available');
              // } else {
              //   console.log('No data available');
              // }
            
            // .catch((error) => {
            //   console.log("err")
            //   console.log(error);
            // });
            getUsers()
        } else {
          // console.log("no current user");
          navigate("/LogIn");
        }
      });
    }
  });

  return (
    <div
      style={{
        color: '#fff',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // backgroundImage: `url(${SplashScreen})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      haha
    </div>
  );
};

export default Splash;
