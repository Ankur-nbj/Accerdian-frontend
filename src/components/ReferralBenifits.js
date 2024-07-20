import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import { styled } from "@mui/system";

const categories = [
  "PRODUCT MANAGEMENT",
  "STRATEGY & LEADERSHIP",
  "BUSINESS MANAGEMENT",
  "FINTECH",
  "SENIOR MANAGEMENT",
  "DATA SCIENCE",
  "DIGITAL TRANSFORMATION",
  "BUSINESS ANALYTICS",
];

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const Sidebar = styled(Box)({
  width: "22%",
  borderRadius: "10px",
  padding: "0",
  background: "none",
  boxShadow: "0px 1px 24.4px 1px #00000029",
});

const Content = styled(Box)({
  width: "65%",
  marginLeft: "2rem",
  borderRadius: "15px",
  background:"none"
});

const ReferralBenefits = ({ onReferClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "2rem",
        background: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <Typography
        align="center"
        gutterBottom
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        What Are The{" "}
        <span style={{ color: "#1A73E8" }}>Referral Benefits?</span>
      </Typography>
      <FormControlLabel  control={<Switch  defaultChecked color="primary" />} label="Enrolled" labelPlacement="start" sx={{ position: 'absolute', top: "8%", right: "10%" }}/>
      <Box
        sx={{
          display: "flex",
          padding: "2rem",
          background: "#FFFFFF",
          alignItems: "start",
          justifyContent: "center",
          width: "100%", 
        }}
      >
        <Sidebar>
          <List component="nav" aria-label="main mailbox folders" disablePadding>
            <ListItem
              component="button"
              secondaryAction={<KeyboardArrowRight />}
              sx={{
                background: "#1A73E8",
                border: "none",
                borderRadius: "10px 10px 0 0",
                color: "white",
                py: "0.8rem"
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.700rem",
                  color: "white",
                  fontWeight: "bold",
                }}
                primary="ALL PROGRAMS"
              />
            </ListItem>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <ListItem
                  component="button"
                  secondaryAction={<KeyboardArrowRight />}
                  sx={{ border: "none", background: "transparent",py:"0.8rem" }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "0.700rem",
                      fontColor: "#3C4852",
                      fontWeight: "bold",
                    }}
                    primary={category}
                  />
                </ListItem>
                {index < categories.length - 1 ? (
                  <Divider sx={{ mx: "1rem" }} />
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </List>
        </Sidebar>
        <Content>
          <TableContainer component={Paper} sx={{boxShadow: "0px 4px 29.3px 0px #3C3C3C26", borderRadius:"10px"}}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#1A73E859" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      borderBottom: "none",
                      color: "#1350A0",
                      fontWeight:"bold"
                     }}
                  >
                    Programs
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderLeft: "2px solid #00000038",
                      borderBottom: "none",
                      color: "#1350A0",
                      fontWeight:"bold",
                      width: "150px" 
                    }}
                  >
                    Referrer Bonus
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderLeft: "2px solid #00000038",
                      color: "#1350A0",
                      borderBottom: "none",
                      fontWeight:"bold",
                      width: "150px" 
                    }}
                  >
                    Referee Bonus
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs.map((program, index) => (
                 <TableRow key={index} sx={{ border: "none" }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        borderBottom: "none",
                        background: '#EBF3FF59'
                      }}
                    >
                      <img
                        src="./images/Group.png"
                        alt="vector"
                        style={{ marginRight: "10px", height: "17px" }}
                      />
                      {program.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderLeft: "2px solid #00000038",
                        background: '#EBF3FF59',
                        borderBottom: "none",
                      }}
                    >
                      {program.referrerBonus}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderLeft: "2px solid #00000038",
                        background: '#EBF3FF59',
                        borderBottom: "none",
                       }}
                       >
                      {program.refereeBonus}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "1rem" }}>
            <Button variant="outlined"  endIcon={<ExpandMore />} sx={{border: '1px solid #B6B6B6', color:'#3C4852',textTransform: 'none'}}>
              Show More
            </Button>
          </Box>
        </Content>
      </Box>
                      
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: "2rem" }}>
          <Button variant="contained" color="primary" sx={{textTransform: 'none'}} onClick={onReferClick}>
          Refer Now
        </Button>
      </Box>
    </Box>
  );
};

export default ReferralBenefits;
