// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FB_API,
  // authDomain: process.env.REACT_APP_FB_AUTH_DOM,
  // projectId: process.env.REACT_APP_FB_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FB_STORAGE_BUK,
  // messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  // appId: process.env.REACT_APP_FB_APP_ID,
  // measurementId: process.env.REACT_APP_FB_MEASURE_ID,
  apiKey: "AIzaSyDyq14-e4niBp0918gjwp1kbiaV4bmMOaM",
  authDomain: "nammasociety-36224.firebaseapp.com",
  projectId: "nammasociety-36224",
  storageBucket: "nammasociety-36224.appspot.com",
  messagingSenderId: "608812437218",
  appId: "1:608812437218:web:26b654534475d0dc63d8bb",
  measurementId: "G-V9MF2HLF1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

 
// const analytics = getAnalytics(app);
export default app;


