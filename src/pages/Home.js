import React, { useState, useRef } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import HowToRefer from "../components/HowToRefer";
import ReferralBenefits from "../components/ReferralBenifits";
import FAQPage from "../components/FAQPage";
import Footer from "../components/Footer";
import { Box, Tab, Tabs } from "@mui/material";
import ReferralFormModal from "../components/RefferalFormModal";

const Home = () => {
  const [value, setValue] = useState(0);

  // Create refs for each section
  const heroSectionRef = useRef(null);
  const howToReferRef = useRef(null);
  const referralBenefitsRef = useRef(null);
  const faqPageRef = useRef(null);
  const footerRef = useRef(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);

    // Scroll to the corresponding section
    if (newValue === 0 && heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 1 && howToReferRef.current) {
      howToReferRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 2 && faqPageRef.current) {
      faqPageRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 3 && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Header />
      <Box
        sx={{
          background: "#1A73E81C",
          borderRadius: "500px",
          p: "0 2rem",
          width: "45%",
          margin: "2rem auto",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            sx: {
              display: "flex",
              justifyContent: "center",
              top: "unset",
              bottom: "8px",
              bgcolor: "transparent",
              "& .MuiTabs-indicatorSpan": {
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#1A73E8",
              },
            },
            children: <span className="MuiTabs-indicatorSpan" />,
          }}
        >
          <Tab
            label="Refer"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "17px",
              mx: "1rem",
            }}
          />
          <Tab
            label="Benefits"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "17px",
              mx: "1rem",
            }}
          />
          <Tab
            label="FAQs"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "17px",
              mx: "1rem",
            }}
          />
          <Tab
            label="Support"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "17px",
              mx: "1rem",
            }}
          />
        </Tabs>
      </Box>
      <div ref={heroSectionRef}>
        <HeroSection onReferClick={handleOpenModal} />
      </div>
      <div ref={howToReferRef}>
        <HowToRefer onReferClick={handleOpenModal} />
      </div>
      <div ref={referralBenefitsRef}>
        <ReferralBenefits onReferClick={handleOpenModal}/>
      </div>
      <div ref={faqPageRef}>
        <FAQPage />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <ReferralFormModal open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default Home;
