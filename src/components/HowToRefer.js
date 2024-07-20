import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HowToRefer = ({ onReferClick }) => {
  return (
    <Box
      sx={{
        background: "#EEF5FF",
        padding: "2rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        align="center"
        gutterBottom
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        How Do I <span style={{ color: "#1A73E8" }}>Refer?</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          height: "300px",
          alignItems: "center",
          justifyContent: "space-around",
          m: "3rem auto",
          backgroundImage: 'url("./images/template.png")', 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "2rem 5rem", 
          borderRadius: "15px", 
          position: "relative", 
          zIndex: 1
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "120px", 
            width: "20%", 
            backgroundColor: "transparent",
            padding: "1rem",
            position: "relative",
            zIndex: 1, 
          }}
        >
          <img
            src="./images/add_friend.png"
            alt="friend"
            style={{ marginBottom: "0.5rem", width: "70px", height: "60px" }} 
          />
          <Typography variant="body2" sx={{ mx: "0.5rem", fontSize: "10px" }}>
            Submit referrals easily via our website’s referral section.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "120px", 
            width: "20%", 
            backgroundColor: "transparent",
            padding: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="./images/notes.png"
            alt="notes"
            style={{ marginBottom: "0.5rem", width: "60px", height: "60px" }} 
          />
          <Typography variant="body2" sx={{ mx: "0.5rem", fontSize: "10px" }}>
            Earn rewards once your referral joins an Accredian program.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "120px", 
            width: "20%", 
            backgroundColor: "transparent",
            padding: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="./images/wallet.png"
            alt="wallet"
            style={{ marginBottom: "0.5rem", width: "60px", height: "60px" }} 
          />
          <Typography variant="body2" sx={{ mx: "0.5rem", fontSize: "10px" }}>
            Both parties receive a bonus 30 days after program enrollment.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={onReferClick}
        >
          Refer Now
        </Button>
      </Box>
    </Box>
  );
};

export default HowToRefer;
