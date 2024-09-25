"use client";

import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setsubmitted] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    if (
      contactForm.name.length > 0 &&
      contactForm.email.length > 0 &&
      contactForm.company.length > 0 &&
      contactForm.message.length > 0
    ) {
      setsubmitted(true);

      try {
        const sendEmailRes = {
          email: "testdavose@gmail.com",
          name: contactForm.name,
          Uemail: contactForm.email,
          company: contactForm.company,
          message: contactForm.message,
          category: "contact-us",
        };
        console.log("Email sent successfully:", sendEmailRes);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  const contactFormsubmitMessage = {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    pb: 15,
    px: 8,
    mt: 0,
    pt: 10,
    gap: "80px",
    bgcolor: "white",
    textAlign: "center",
  };

  return (
    <Box
      component="section"
      // sx= {{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   bgcolor: "white",
      //   pb: 15,
      //   px: 8,
      //   mt: 0,
      //   pt: 10,
      // }}
      // style={submitted ? { contactFormsubmitMessage } : {}}
      sx={
        submitted
          ? contactFormsubmitMessage
          : {
              display: "flex",
              justifyContent: "space-between",
              gap: "25px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "start",
                md: "start",
              },

              pb: 15,
              px: {
                xs: 3,
                sm: 5,
                md: 8,
              },
              mt: 0,
              pt: 10,
            }
      }
    >
      <Typography
        color="#151d23"
        sx={{
          textAlign: !submitted && "center",
          fontSize: {
            xs: "34px",
            sm: "40px",
            md: "50px",
          },
        }}
      >
        Contact Us
      </Typography>
      {/* style={{width: "50%"}} */}

      {!submitted ? (
        <Box
          component="form"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
            },
          }}
        >
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            value={contactForm.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Company"
            margin="normal"
            name="company"
            value={contactForm.company}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
            name="message"
            value={contactForm.message}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              borderRadius: 1.5,
              bgcolor: "#1f1d0d",
              color: "#fff",
              width: "fit-content",
              px: 3,
              ":hover": {
                bgcolor: "#000",
                color: "#fff",
                fontWeight: "600",
              },
            }}
          >
            Send
          </Button>
        </Box>
      ) : (
        <Box
          // width="45%"
          // height={400}
          textAlign={"center"}
          alignContent={"center"}
        >
          <Typography variant="h3">We&apos;ll be in touch soon.</Typography>
          <Typography>
            You&apos;ll get an email confirmation for your call.
          </Typography>
          <Typography>
            If you need more assistance, contact support@davose.com.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ContactUs;
