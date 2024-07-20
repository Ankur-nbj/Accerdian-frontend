import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LogIn = () => {
  const host= process.env.SERVER_URL;

  const navigate=useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const onSubmit = async(data) => {
    try {
      const response = await axios.post(`${host}/users/login`, data);

      if (response.status === 200) {
        navigate('/'); // Redirect to home page
      } else {
        // Handle unexpected status codes
        alert('Login failed');
      }
    } catch (error) {
      // Handle errors
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <>
      <Header />
      <Box
        component="paper"
        maxWidth="xs"
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
          margin: "2rem auto",
          padding: "3rem 1rem",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "20px"
        }}
      >
        {isNonMobileScreens &&
        <Box sx={{ width: "40%" }}>
          <img src="./images/login.png" alt="login" />
        </Box>
        }
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isNonMobileScreens ? "50%" : "80%",
          }}
        >
          <Typography sx={{fontSize:"2rem", fontWeight:"bold"}}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1, display: "flex", flexDirection:"column" }}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  margin="normal"
                  id="email"
                  fullWidth
                  label="Email Address*"
                  autoComplete="email"
                  autoFocus
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  sx={{ maxWidth: "400px", width: "100%" }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  margin="normal"
                  id="password"
                  fullWidth
                  label="Password*"
                  type="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  sx={{ maxWidth: "400px", width: "100%",  }}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth: "100px", width: "100%" }}
            >
              LogIn
            </Button>
            <Link href="/signup" sx={{textDecoration:"none", color:"black", fontSize:"0.75rem", fontWeight:"bold"}}>
              {"Don't have an account? Sign Up here"}
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LogIn;