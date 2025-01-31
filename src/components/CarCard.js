import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CarCard = ({ car }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
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
      </CardContent>
    </Card>
  );
};

export default CarCard;
