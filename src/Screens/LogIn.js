import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { logDOM } from "@testing-library/react";


// import { useNavigate } from "react-router-dom";


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
//   const navigate = useNavigate();

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
      } catch (err) {
        setError(err.message);
        // navigate("/SignIn");
        setError("");
      }
    }
  };

  return (
    <Container >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <text
          style={{
            color: "#fff",
            fontSize: "1.8em",
            fontWeight: 500,
            marginBottom: "14%",
          }}
        >
          Sign in
        </text>
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
            style={{ backgroundColor: "#eee", borderRadius: 7 }}
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
            style={{ backgroundColor: "#eee", borderRadius: 7 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <text
        style={{ color: "#00f" }}
        onClick={() => {
        //   navigate("/ForgotPassword");
        }}
      >
        Forgot password?
      </text>
    </Container>
  );
}
