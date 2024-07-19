import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import heroImage from '../assets/hero-image.jpg';
import footerImage from '../assets/footer-bg-image.png';

const Home = () => {
  return (
    <div>
      <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-text">
          <h1>Welcome to BK Motorsport</h1>
          <p><b>Your destination for legendery classic cars</b></p>
          <Link to="/cars" className="hero-button"><FontAwesomeIcon icon={faCar} />View Car List</Link>
        </div>
      </div>
      
      <div className="navbar-logo">
        <img src={footerImage} alt="bk motorsport" />
      </div>
    </div>
  );
};

export default Home;


