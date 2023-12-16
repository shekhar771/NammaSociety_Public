
import { UserAuthContextProvider } from "./userAuth/UserAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Screens/LogIn";
import Splash from "./Screens/HomeScreen";
function App() {
  return (
    // <div className="App">
    //     {/* <UserAuthContextProvider> */}

            
    //         <Routes>
    //           <Route path = '/' element = {<Splash/>}/>
              // <Route path = '/Login' element = {<LogIn/>}/>
    //         </Routes>
        // {/* </UserAuthContextProvider> */}
    // </div>
    // <BrowserRouter>
    <UserAuthContextProvider>
    <Routes>
      <Route path = '/' element = {<LogIn/>}/>
    </Routes>
    </UserAuthContextProvider>
    // </BrowserRouter>

            // <Routes>
            //   <Route path = '/' element = {<Splash/>}/>
            //   {/* <Route path = '/Login' element = {<LogIn/>}/> */}
            // </Routes>
  );
}

export default App;
