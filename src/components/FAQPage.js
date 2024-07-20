import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {KeyboardArrowRight,ExpandMore} from "@mui/icons-material";

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// Define FAQs for each tab
const faqItems = {
  eligibility: [
    {
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "The minimum system configuration required is...",
    },
  ],
  howToUse: [
    {
      question: "How do I sign up for the program?",
      answer:
        "To sign up, visit the registration page and fill out the required information. You will receive a confirmation email once your registration is complete.",
    },
    {
      question: "How can I access the course materials?",
      answer:
        "After signing up, you will get access to the course materials through the learning portal. Login with your credentials to access the resources.",
    },
  ],
  termsAndConditions: [
    {
      question: "What is the refund policy?",
      answer:
        "You can request a refund within the first 14 days of the program start date. For more details, refer to our refund policy section.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "No, there are no additional fees apart from the program fee. All costs are included in the initial payment.",
    },
  ],
};

const FAQPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderAccordion = (items) => (
    <>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleAccordionChange(index)}
          sx={{
            border: "none",
            boxShadow: "none",
            px: "2rem",
            mb: "1rem",
            "&:before": {
              display: "none", // Remove the divider
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              color: expanded === index ? "#1A73E8" : "#000000",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ ml: "1rem" }}>
            <Typography sx={{ fontSize: "12px" }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );

  return (
    <Box sx={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <Typography
        align="center"
        gutterBottom
        sx={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Frequently Asked <span style={{ color: "#1A73E8" }}>Questions</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: "3rem auto",
          width: "80%",
        }}
      >
        <Tabs
          value={selectedTab}
          orientation="vertical"
          onChange={handleTabChange}
          aria-label="FAQ Tabs"
          variant="fullWidth"
          sx={{ width: "35%" }}
          TabIndicatorProps={{
            sx: {
              bgcolor: "transparent",
            },
          }}
        >
          <Tab
            component="button"
            label="Eligibility"
            sx={{
              border:
                selectedTab === 0 ? "2px solid #E2E8F0" : "2px solid #737373",
              boxShadow: "0px 2px 26.6px 0px rgba(0, 0, 0, 0.18)",
              mb: "2rem",
              borderRadius: "7px",
              textTransform: "none",
              fontWeight: "bold",
              color: selectedTab === 0 ? "#1A73E8" : "#737373",
            }}
          />
          <Tab
            component="button"
            label="How To Use?"
            sx={{
              border:
                selectedTab === 1 ? "2px solid #E2E8F0" : "2px solid #737373",
              mb: "2rem",
              borderRadius: "7px",
              textTransform: "none",
              fontWeight: "bold",
              color: selectedTab === 1 ? "#1A73E8" : "#737373",
            }}
          />
          <Tab
            component="button"
            label="Terms & Conditions"
            sx={{
              border:
                selectedTab === 2 ? "2px solid #E2E8F0" : "2px solid #737373",
              borderRadius: "7px",
              mb: "2rem",
              textTransform: "none",
              fontWeight: "bold",
              color: selectedTab === 2 ? "#1A73E8" : "#737373",
            }}
          />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          {renderAccordion(faqItems.eligibility)}
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          {renderAccordion(faqItems.howToUse)}
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          {renderAccordion(faqItems.termsAndConditions)}
        </TabPanel>
      </Box>
      <Box
         sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          m: "5rem auto",
          padding: "3rem 2rem",
          background: "#1A73E8",
          border: "1px solid #1A73E8",
          borderRadius: "12px",
          backgroundImage: `url('./images/circle.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10% center",
          backgroundSize: "700px",
        }}
      >  
        <img src="./images/Mic.png" alt="mic" style={{height:"50px", width:"50px", marginRight:"1rem"}}/>
        <Box>
          <Typography variant="h6" color="white" marginBottom={0} gutterBottom>
            Want to delve deeper into the program?
          </Typography>
          <Typography  sx={{color:"white", fontSize:"10px"}}>
            Share your details to receive expert insights from our program team!
          </Typography>
        </Box>
        <Button
          sx={{color:"#3B82F6", ml: "auto",px:2, height: "fit-content", background:"white", textTransform:"none", fontWeight:"bold" }}
          endIcon={<KeyboardArrowRight />}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default FAQPage;
