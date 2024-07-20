import React, { useState } from "react";
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignUp = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const host= process.env.SERVER_URL;
  
  // State variables for form fields
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const data = {
      name,
      lastName,
      email,
      password
    };

    try {
      const response = await axios.post(`${host}/users/register`, data);
    
      if (response.status === 201 ) {
        // Handle successful response here
        alert('User registered successfully');

         // Clear form fields
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');

      } else {
        // Handle unexpected status codes here
        alert('Could not sign up');
      }
    } catch (error) {
      // Handle error here
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: isNonMobileScreens ? "60%" : "90%",
          padding: "2rem",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "20px",
          my: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            mr: "4rem",
            width: isNonMobileScreens ? "50%" : "100%",
            pl: "1rem",
          }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="First Name"
              autoComplete="given-name"
              autoFocus
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              autoComplete="family-name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              sx={{ maxWidth: "400px", width: "100%" }}
            />
            <TextField
              id="password"
              variant="standard"
              margin="normal"
              fullWidth
              label="Password*"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              sx={{ maxWidth: "400px", width: "100%" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, maxWidth: "100px", width: "100%" }}
              >
                Register
              </Button>
              <Link
                href="/login"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Already have an account?
              </Link>
            </Box>
          </Box>
        </Box>
        {isNonMobileScreens ? (
          <Box sx={{ width: "50%", margin: "auto 0" }}>
            <img src="./images/signup.png" alt="signup" />
          </Box>
        ) : (
          ""
        )}
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;