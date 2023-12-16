import { createContext, useContext, useEffect, useState } from "react";
import {
//   createUserWithEmailAndPassword, -->to be added later 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithPopup,
} from "firebase/auth";
import {auth} from "../Firebase/firebaseConfig"
// import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();


export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
//   const navigate =  useNavigate();

  function logIn(email, password) {
    // navigate("/");
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    // navigate("/SignIn");
    return signOut(auth);
    
  }

  function forgotPassword  (email) {
    return sendPasswordResetEmail(auth, email);
  }

  //   function signUp(email, password) {
  //     return createUserWithEmailAndPassword(auth, email, password);
  //   }
  //   function googleSignIn() {
  //     const googleAuthProvider = new GoogleAuthProvider();
  //     return signInWithPopup(auth, googleAuthProvider);
  //   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, logOut,forgotPassword }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
