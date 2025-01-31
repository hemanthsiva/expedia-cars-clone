import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import cars from "./data/cars";
import CarCard from "./components/CarCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookedCar, setBookedCar] = useState(null); // Track the booked car
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearchLocation = (query) => {
    const filtered = cars.filter((car) =>
      car.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleSearchDate = (date) => {
    setSelectedDate(date);
    const filtered = cars.filter((car) => car.availableDates.includes(date));
    setFilteredCars(filtered);
  };

  const handleCarBooking = (car) => {
    if (!bookedCar) {
      setSelectedCar(car);
    }
  };

  const handleProceed = (location, date) => {
    if (
      selectedCar &&
      selectedCar.location.toLowerCase().includes(location.toLowerCase()) &&
      selectedCar.availableDates.includes(date)
    ) {
      setBookedCar(selectedCar); // Book the selected car
      alert(`${selectedCar.name} has been booked!`);
    } else {
      alert("Please select a valid car and date.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
        MIY Cars 🚗
      </Typography>

      <SearchBar
        onSearchLocation={handleSearchLocation}
        onSearchDate={handleSearchDate}
        onProceed={handleProceed}
      />

      <Grid container spacing={3} justifyContent="center">
        {filteredCars.map((car) => (
          <Grid item key={car.id}>
            <CarCard
              car={car}
              onBook={handleCarBooking}
              isBooked={bookedCar && bookedCar.id === car.id}
              isSelected={selectedCar && selectedCar.id === car.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
