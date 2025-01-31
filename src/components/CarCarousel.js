import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CarCard from "./CarCard";
import cars from "../data/cars";

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 0 }}>
        <ArrowBackIos />
      </IconButton>

      <CarCard car={cars[currentIndex]} />

      <IconButton onClick={handleNext} sx={{ position: "absolute", right: 0 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default CarCarousel;
