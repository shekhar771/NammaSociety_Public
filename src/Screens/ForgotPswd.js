import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { AppBar, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { logDOM } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../userAuth/UserAuth";
// import { BiArrowBack } from "react-icons/bi";
import { IconButton } from "@mui/material";

const theme = createTheme();

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { forgotPassword } = useUserAuth();
  const [error, setError] = useState("");
  const [helperText, setHelperText] = useState("");

  const SendPassword = async (event) => {
    event.preventDefault();
    setError("");
    setHelperText("");
    setEmail("");
    try {
      await forgotPassword(email);
    } catch (err) {
      setError(err.message);
      setHelperText("Please enter a valid password");
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Verify Email
          </Typography>
          <Typography component="h3" variant="h7">
            Attemps Remaining
          </Typography>
          <Box
            component="form"
            onSubmit={SendPassword}
            noValidate
            sx={{ mt: 1 }}
          >
            
            
            <TextField
              error={error}
              helperText={helperText}
              value={email}
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
                // console.log(email)
              }}
              style={{ backgroundColor: "#eee", borderRadius: 7 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send verification Mail
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
