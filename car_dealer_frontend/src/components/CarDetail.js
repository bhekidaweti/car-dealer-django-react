import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/dealership/${id}/`);
        setCar(response.data);
      } catch (error) {
        console.error('There was an error fetching the car details!', error);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % car.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + car.images.length) % car.images.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="car-detail">
      <div className="container">
      <div className="caption-container">
          <p>{car.make} {car.model}</p>
        </div>
        <div className="mySlides">
          <img src={car.images[currentSlide].images} alt={`Car image ${currentSlide + 1}`} style={{ width: '100%' }} />
        </div>

        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>

        <div className="row">
          {car.images.map((imgObj, index) => (
            <div key={index} className="column">
              <img
                className={`demo cursor ${index === currentSlide ? 'active' : ''}`}
                src={imgObj.images}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: '100%' }}
                onClick={() => setSlide(index)}
              />
            </div>
          ))}
        </div>
      </div>    
             
      <table className="car-specifications">
        <tbody>
          <tr><strong>{car.description} </strong></tr>
          <tr>
            <th>Year</th>
            <td>{car.year}</td>
          </tr>
          <tr>
            <th>Make</th>
            <td>{car.make}</td>
          </tr>
          <tr>
            <th>Model</th>
            <td>{car.model}</td>
          </tr>
          <tr>
            <th>Vehicle Type</th>
            <td>{car.vehicle_type}</td>
          </tr>
          <tr>
            <th>Seats</th>
            <td>{car.seats}</td>
          </tr>
          <tr>
            <th>Doors</th>
            <td>{car.doors}</td>
          </tr>
          <tr>
            <th>Transmission Type</th>
            <td>{car.transmission_type}</td>
          </tr>
          <tr>
            <th>Fuel Type</th>
            <td>{car.fuel_type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarDetail;
