import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box
        sx={{ textAlign: "center", background: "#1A73E826", padding: "8px" }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
          Navigate your ideal career path with tailored expert advice
          <Typography
            component="span"
            sx={{
              color: "#1A73E8",
              ml: 2,
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            Contact Expert
          </Typography>
        </Typography>
      </Box>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <img src="./images/logo.png" alt="logo" width="125px" height="36px" onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
          <Button
            variant="contained"
            color="primary"
            endIcon={<KeyboardArrowDown />}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Courses
          </Button>
        </Box>
        
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Refer & Earn
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Resources
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              background: "#94A3B833",
            }}
            onClick={()=>navigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Try for free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
