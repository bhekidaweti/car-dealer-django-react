import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarList.css';
import { Link } from 'react-router-dom';


const CarList = () => {
  const [cars, setCars] = useState([]);


  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dealership/');
      setCars(response.data);
    } catch (error) {
      console.error('There was an error fetching the cars!', error);
    }
  };


  return (
    <div>  
      <div className="car-container">
        {cars.map(car => (
          <div className="car-item" key={car.id}>
            <img src={car.image} alt={car.name} style={{width: "200px"}} />
            <p>Vehicle Type: {car.vehicle_type}</p>
            <p>Seats: {car.seats}</p>
            <p>Mileage: {car.mileage} KM</p>
            <p>Doors: {car.doors}</p>
            <p>Transmission: {car.transmission_type}</p>
            <p>Fuel Type: {car.fuel_type}</p>
            <Link to={`/cars/${car.id}`} className="details-button">More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;

