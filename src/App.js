import { UserAuthContextProvider } from './userAuth/UserAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './Screens/LogIn';
import Splash from './Screens/SplashScr';
import ForgotPassword from './Screens/ForgotPswd';
import HomeScreen from './Screens/HomeScreen';
import MainScreen from './Screens/MainScreen';

import YourData from './Screens/YourData';
import CreateSociety from './Screens/CreateSociety';
import UserUnlock from './Screens/UserUnlock';
import UserInfo from './Screens/UserInfo';
import SocietyCreation from './Screens/SocietyCreation1';
import SocietyModify from './Screens/SocietyModify';
import SocGL from './Screens/SocGL';
import EditSociety from './Screens/EditSociety';
import ModifyBilling from './Components/ModifyBilling';
import CreateUser from './Screens/CreateUser';
import BillingHeads from './Screens/BillingHeads';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100vh,',
        height: '100vh',
        backgroundColor: '#151',
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
            <Route path='/Home' element={<HomeScreen />}>
              <Route path='/Home/' element={<YourData />} />
              <Route path='/Home/UserUnlock' element={<UserUnlock />} />
              <Route path='/Home/UserInfo' element={<UserInfo />} />
              <Route path='/Home/SocietyCreate' element={<CreateSociety />} />
              <Route path='/Home/Society' element={<SocietyCreation />} />
              <Route path='/Home/EditSociety' element={<EditSociety />} />
              <Route path='/Home/SocietyModify' element={<SocietyModify />} />
              <Route path='/Home/CreateUser' element={<CreateUser />} />

              <Route path='/Home/SocGL' element={<SocGL />} />

              <Route path='/Home/BillingHeads' element={<BillingHeads />} />
              <Route path='/Home/ModifyBilling' element={<ModifyBilling />} />
            </Route>
            <Route path='/MainScreen' element={<MainScreen />} />
          </Routes>
        </div>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
