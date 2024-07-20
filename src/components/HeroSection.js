import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = ({ onReferClick }) => {
  return (
    <Container
      sx={{
        maxWidth: "lg",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          mb: "2rem",
          background: "#EEF5FF",
          boxShadow: "0px 4px 65px 1px #00072B36",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            p: "2rem",
            gap: "2rem",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Let's Learn & Earn
          </Typography>
          <Typography component="p" gutterBottom sx={{ fontSize: "30px" }}>
            Get a chance to win up-to{" "}
            <Typography
              component="span"
              sx={{ color: "#1A73E8", fontSize: "35px", fontWeight: "bold" }}
            >
              Rs. 15,000
            </Typography>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={onReferClick}
          >
            Refer Now
          </Button>
        </Box>
        <Box sx={{ height: "100%" }}>
          <img
            src="./images/Anniversary.png"
            alt="Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
