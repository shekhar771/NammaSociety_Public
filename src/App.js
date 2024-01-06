import { UserAuthContextProvider } from './userAuth/UserAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './Screens/LogIn';
import Splash from './Screens/SplashScr';
import ForgotPassword from './Screens/ForgotPswd';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#010',
        width: '100vh,',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <UserAuthContextProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#334',
            height: '100%',
            width: '100%',
          }}
        >
          <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/Home' element={<HomeScreen />} />
          </Routes>
        </div>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
