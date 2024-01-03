import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, AppBar, Toolbar} from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TopBar from "../Components/Toolbar"; 
import Styles from '../Css/LogInPg.module.css';
import { useNavigate } from "react-router-dom";


import { useState } from "react";
import { useUserAuth } from "../userAuth/UserAuth";

// import { useUserAuth } from "../context/UserAuthContext";
// import logo512 from "../Assets/logo512.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [passError, setPassError] = useState("");
  const [passHelper, setPassHelper] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setEmailError("");
    setEmailHelper("");
    setPassError("");
    setPassHelper("");

    if (!email) {
      setEmailError("No Email");
      setEmailHelper("Please enter a valid Email");
    }
    if (!password) {
      setPassError("Np Password");
      setPassHelper("Please enter a valid Password");
    } else {
      try {
        await logIn(email, password);
        console.log("logged In successfully");
        navigate("/Home");
      } catch (err) {
        setError("incorrect Emai Id or Password");
      }
    }
  };

  return (
    <div className={Styles.LogInPage}  >
      <TopBar/>

      <div className={Styles.Mainbox}>


        <div className={Styles.formfeildBox} >
          <text
          className={Styles.loginHeading}
          >
            Login
          </text>
          <div className={Styles.formfeild} component="form"  noValidate sx={{ mt: 1 }}>
          <text
            style={{
              color: "#f00",
              fontSize: "1em",
            }}
          >
            {error}
          </text>
            <TextField
              error={emailError}
              helperText={emailHelper}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ backgroundColor: "#eee", borderRadius: 7, marginTop:"20px", marginBottom:"20px"  }}
            />
            <TextField
              error={passError}
              helperText={passHelper}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ backgroundColor: "#eee", borderRadius: 7, marginTop:"20px", marginBottom:"20px" }}
            />

            <button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              className={Styles.Proceed}
            >
              Proceed
            </button>

          </div>
        </div>
        <div className={Styles.Imagebox}></div>

      </div>
    </div>
  );
}
