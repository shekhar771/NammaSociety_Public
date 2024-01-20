import * as React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, get, child } from 'firebase/database';
// import SplashScreen from "../assets/SplashScreen.jpg";

const Splash = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const isCalledRef = React.useRef(false);

  //   const navToHome = (details) => {
  //     setTimeout(navigate("/LogIn", { state: details }), 3000);
  //   };

  React.useEffect(() => {
    if (!isCalledRef.current) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `Users/${user.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                // console.log(snapshot.val())
                const data = snapshot.val();
                console.log(data);
                // const details = JSON.stringify(snapshot.val());
                // navToHome(details);
              } else {
                console.log('No data available');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log('no current user');
          navigate('/LogIn');
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
