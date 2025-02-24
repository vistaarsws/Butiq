import { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import "./styles.css";

export default function Book() {
  const hotels = ["Hotel A", "Hotel B", "Hotel C"];

  const [selectedHotel, setSelectedHotel] = useState("");
  const [currentMonth, setCurrentMonth] = useState(1);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const availableDates = [24, 25, 26, 27, 28];

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev < 11 ? prev + 1 : prev));
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        className="container"
      >
        <TextField
          select
          label="Choose Hotel"
          value={selectedHotel}
          onChange={(e) => setSelectedHotel(e.target.value)}
          className="hotel-select"
        >
          {hotels.map((hotel) => (
            <MenuItem key={hotel} value={hotel}>
              {hotel}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h6" className="calendar-title">
          February 2025
        </Typography>

        <Grid container justifyContent="center" alignItems="center">
          <IconButton onClick={handlePrevMonth}>
            <ArrowBackIosIcon />
          </IconButton>

          <Grid container className="calendar" justifyContent="center">
            {days.map((day, index) => (
              <Typography key={index} className="day-header">
                {day}
              </Typography>
            ))}
            {Array(35)
              .fill(null)
              .map((_, index) => (
                <Typography
                  key={index}
                  className={
                    availableDates.includes(index + 1)
                      ? "available-date"
                      : "disabled-date"
                  }
                >
                  {index + 1}
                </Typography>
              ))}
          </Grid>

          <IconButton onClick={handleNextMonth}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>

        <Button variant="outlined" className="check-button">
          Check Availability
        </Button>
      </Grid>
    </div>
  );
}
