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
          position: "relative",
          overflow: "hidden"
        }}
      > 
    <img src="./images/money.png" alt="money" style={{position: "absolute", bottom:"10%", left:"45%", zIndex:2, height:"100px", width:"100px"}} />
    <img src="./images/money.png" alt="money" style={{position: "absolute", top:-30, left:0, zIndex:0, height:"100px", width:"100px", transform: "rotate(180deg)"}} />
    <img src="./images/money.png" alt="money" style={{position: "absolute", top:"40%",right:0, zIndex:0,height:"100px", width:"100px", transform: "rotate(180deg)"}}/>
    <img src="./images/money.png" alt="money" style={{position: "absolute", top:-30,right:"5%", zIndex:0,height:"100px", width:"100px", transform: "rotate(250deg)"}}/>
    <img src="./images/money.png" alt="money" style={{position: "absolute", top:0,right:"30%", zIndex:0,height:"100px", width:"100px", transform: "rotate(250deg)"}}/>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            p: "2rem",
            gap: "2rem",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            marginTop="1rem"
            marginBottom={0}
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
            sx={{ textTransform: "none", px:"2rem" }}
            onClick={onReferClick}
          >
            Refer Now
          </Button>
        </Box>
        <Box sx={{ height: "100%", zIndex:1, m:0, p:0 }}>
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
