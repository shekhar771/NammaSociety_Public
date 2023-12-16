import * as React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useNavigate, createSearchParams } from "react-router-dom";
// import { getDatabase, ref, get, child } from "firebase/database";
// import { useState,useRef } from "react";

const Splash = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const isCalledRef = React.useRef(false);

//   const navToHome = (details) => {
//     setTimeout(navigate("/Notices", { state: details }), 3000);
//   };

//   React.useEffect(() => {
//     if (!isCalledRef.current) {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           const dbRef = ref(getDatabase());
//           get(child(dbRef, `users/${user.uid}`))
//             .then((snapshot) => {
//               if (snapshot.exists()) {
//                 // console.log(snapshot.val())
//                 const data = snapshot.val();
//                 console.log(data);
//                 const details = JSON.stringify(snapshot.val());
//                 // navToHome(details);
//               } else {
//                 console.log("No data available");
//               }
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         } else {
//           console.log("no current user");
//         //   navigate("/SignIn");
//         }
//       });
//     }
//   });

  return (
    <div
      style={{
        color: "#000",
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
        // backgroundImage: `url(${SplashScreen})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Splash;
