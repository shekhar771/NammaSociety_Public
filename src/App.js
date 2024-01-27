import { UserAuthContextProvider } from './userAuth/UserAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './Screens/LogIn';
import Splash from './Screens/SplashScr';
import ForgotPassword from './Screens/ForgotPswd';
import HomeScreen from './Screens/HomeScreen';
import MainScreen from './Screens/MainScreen';
import SocietyInfo from './Screens/SocietyInfo';
import SocietyModify from './Screens/SocietyModify';
function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100vh,',
        height: '100vh',
        backgroundColor:"#151",
        justifyContent: 'center',
      }}
    >
      <UserAuthContextProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/Home/*' element={<HomeScreen />} />
            <Route path='/MainScreen' element ={<MainScreen/>}/>
            <Route path='/SocietyModify' element ={<SocietyModify/>}/>
            {/* <Route path='/AccountingGroup' element={<AccountingGroup />} />
            <Route path='/UserUnlock' element={<UserUnlock />} />
            <Route path='/' element={<UserInfo />} /> */}
          </Routes>
        </div>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
