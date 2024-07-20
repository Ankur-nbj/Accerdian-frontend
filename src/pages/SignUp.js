import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const schema = yup.object().shape({
  name: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoComplete="given-name"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
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
                  id="password"
                  variant="standard"
                  margin="normal"
                  fullWidth
                  label="Password*"
                  type="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  sx={{ maxWidth: "400px", width: "100%" }}
                />
              )}
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
            <img src="./images/signup.png" alt="signup" />{" "}
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
