import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

const SearchBar = ({ onSearchLocation, onSearchDate, onProceed }) => {
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleLocationSearch = (event) => {
    setLocationQuery(event.target.value);
    onSearchLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onSearchDate(event.target.value);
  };

  const handleProceedClick = () => {
    onProceed(locationQuery, selectedDate);
  };

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Search by Location"
        variant="outlined"
        value={locationQuery}
        onChange={handleLocationSearch}
        sx={{ width: 300, mr: 2 }}
      />
      <TextField
        label="Select Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={selectedDate}
        onChange={handleDateChange}
        sx={{ width: 300, mr: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleProceedClick}
        sx={{ height: "100%" }}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default SearchBar;
