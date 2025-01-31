import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CarCard = ({ car, onBook, isBooked, isSelected }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        border: isBooked ? "2px solid green" : "none",
        boxShadow: isSelected ? 3 : 1,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={car.image}
        alt={car.name}
      />
      <CardContent>
        <Typography variant="h6">{car.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {car.location}
        </Typography>
        <Typography variant="h6" color="primary">
          {car.price}
        </Typography>
        <button onClick={() => onBook(car)} disabled={isBooked}>
          {isBooked ? "Booked" : isSelected ? "Selected" : "Select"}
        </button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
