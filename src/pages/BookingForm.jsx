import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <ProgressBar steps={["HOTEL", "ROOMS", "BOOK"]} activeStep={2} />
      <Box
        sx={{
          width: "70%",
          mx: "auto",
          mb: 10,
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Could you please fill in your details
        </Typography>

        <Grid container spacing={2}>
          {/* Title Dropdown */}
          <Grid item xs={2}>
            <Select
              fullWidth
              value={formData.title}
              name="title"
              onChange={handleChange}
              sx={{ height: "56px" }}
            >
              <MenuItem value="Mr">Mr   </MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </Grid>

          {/* First Name */}
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              variant="outlined"
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              variant="outlined"
            />
          </Grid>

          {/* Phone Number with Country Flag */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="https://flagcdn.com/w40/in.png"
                      alt="India Flag"
                      style={{
                        width: 25,
                        height: 15,
                        marginRight: 5,
                        borderRadius: 2,
                      }}
                    />
                    +91
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              variant="outlined"
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              variant="outlined"
              multiline
              rows={2}
            />
            <Typography sx={{ fontStyle: "italic",fontFamily:"Raleway" }} variant="caption" color="gray">
              Optional
            </Typography>
          </Grid>

          {/* Country Dropdown */}
          <Grid item xs={12}>
            <Select
              fullWidth
              value={formData.country}
              name="country"
              onChange={handleChange}
              sx={{ height: "56px" }}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </Select>
          </Grid>

          {/* PAY NOW Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                fontSize: "16px",
                padding: "12px",
                "&:hover": { backgroundColor: "#333" },
              }}
              onClick={handleSubmit}
            >
              PAY NOW
            </Button>
          </Grid>
        </Grid>

        {/* Disclaimer Text */}
        <Typography variant="body2" color="gray" mt={2} align="center">
          Please note: You will be currently charged 50% of the total billable
          amount as a confirmation token. The remaining payment can be directly
          made at the hotel.
        </Typography>
      </Box>
    </>
  );
};

export default BookingForm;
