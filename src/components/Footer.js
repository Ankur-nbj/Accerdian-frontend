import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Button,
  Divider,
  IconButton,
  ListItem,
  List,
  ListItemText,
  MenuList,
  MenuItem,
} from "@mui/material";
import {
  Add,
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const programs = [
  "Data Science & AI",
  "Product Management",
  "Business Analytics",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Strategy & Leadership",
  "Senior Management",
  "Fintech",
];

const accerdianItems = [
  "About",
  "Career",
  "Blog",
  "Admission Policy",
  "Referral Policy",
  "Privacy Policy",
  "Terms of Service",
  "Master FAQs",
];

const contactItems = [
  "Email us (For Data Science Queries): admissions@accredian.com",
  "Email us (For Product Management Queries): pm@accredian.com",
  "Data Science Admission Helpline: +91 9079653929 (9 AM - 7 PM)",
  "Product Management Admission Helpline: +91 9625811095",
  "Enrolled Student Helpline: +91 7969322507",
  "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
];

const Footer = () => {
  return (
    <Box sx={{ position: 'relative', backgroundColor: "#232323", color: "#fff", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          m: "0 auto",
          justifyContent: "space-between",
        }}
      >
        <img src="./images/logo2.png" alt="logo2" style={{ height: "35px" }} />
        <Box sx={{mr:"3rem"}}>
          <Button
            variant="contained"
            color="primary"
            href="#"
            sx={{
              backgroundColor: "#007BFF",
              border: "1px solid #FFFFFF",
              borderRadius: "7px",
              textTransform: "none",
              fontSize:"0.75rem"
            }}
          >
            Schedule 1-on-1 Call Now
          </Button>
          <Typography sx={{ fontSize: "0.5rem", textAlign: "center" }}>
            Speak with our Learning Advisor
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "60%", margin: "0 auto" }}>
        <Divider sx={{ backgroundColor: "white", my: "20px" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: "1rem", mb: "0.25rem" }}>
              Programs
            </Typography>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
              {programs.map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="comment">
                      <Add sx={{ color: "white", fontSize: "1rem" }} />
                    </IconButton>
                  }
                  sx={{ padding: "2px 0" }}
                >
                  <ListItemText
                    primary={value}
                    sx={{ "& .MuiTypography-root": { fontSize: "0.75rem" } }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "1rem", mb: "1rem" }}>
              Contact Us
            </Typography>
            {contactItems.map((item, index) => (
              <Typography key={index} sx={{ fontSize: "0.5rem" }}>
                {item}
              </Typography>
            ))}
            <Typography sx={{ marginTop: "0.5rem", fontSize: "1rem" }}>
              Why Accredian
            </Typography>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize: "1.2rem", my: "0.5rem" }}>
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "180px",
                }}
              >
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  color="inherit"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedIn />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  color="inherit"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  color="inherit"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  color="inherit"
                >
                  <YouTube />
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography sx={{ fontSize: "1rem", mb: "0.75rem" }}>
              Accredian
            </Typography>
            <MenuList sx={{ padding: 0 }}>
              {accerdianItems.map((item, index) => (
                <MenuItem
                  key={index}
                  sx={{ paddingLeft: 0, padding: "2px 0", fontSize: "0.5rem" }}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography  sx={{fontSize:"0.5rem", mt: 2 }}>
            &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 40, right: 20 }}>
        <img src="./images/SVG.png" alt="svg" height="40px"/>
      </Box>
    </Box>
  );
};

export default Footer;
