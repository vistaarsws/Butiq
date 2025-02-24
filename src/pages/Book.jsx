import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Default styles
import "react-date-range/dist/theme/default.css"; // Default theme
import { Box, Button, Select, MenuItem, Typography } from "@mui/material";
import "../styles/Book.css";

const Book = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <Box className="booking-container">
      {/* Hotel Selection Dropdown */}
      <Select
        value={selectedHotel}
        onChange={(e) => setSelectedHotel(e.target.value)}
        displayEmpty
        className="hotel-select"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <MenuItem value="">Choose Hotel</MenuItem>
        <MenuItem value="Hotel A">Hotel A</MenuItem>
        <MenuItem value="Hotel B">Hotel B</MenuItem>
      </Select>

      {/* Always Visible Date Range Picker */}
      <Box className="calendar-container">
        <DateRange
          ranges={dateRange}
          onChange={(ranges) => setDateRange([ranges.selection])}
          showMonthAndYearPickers={true} // Allows selecting months/years
          showPreview={true} // Shows a preview of selected range
          moveRangeOnFirstSelection={false}
        />
      </Box>

      {/* Check Availability Button */}
      <Button
        variant="outlined"
        className="check-button"
        sx={{ borderRadius: 0, border: "1px solid black", color: "black" }}
      >
        CHECK AVAILABILITY
      </Button>
    </Box>
  );
};

export default Book;
