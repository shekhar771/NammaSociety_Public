
import { UserAuthContextProvider } from "./userAuth/UserAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LogIn from "./Screens/LogIn";
import Splash from "./Screens/SplashScr";
import ForgotPassword from "./Screens/ForgotPswd";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
      <Route path = '/' element = {<Splash/>}/>
      <Route path = '/LogIn'element = {<LogIn/>}/>
      <Route path  = '/ForgotPassword' element ={< ForgotPassword/>} />
      <Route path = '/Home' element = {<HomeScreen/>}/>
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
