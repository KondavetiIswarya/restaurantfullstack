import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faConciergeBell, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Services.css';  // External CSS for styling

const Services = () => {
  return (
    <div className="services-container">
      {/* Animated Title */}
      <h1 className="services-title">Our Services</h1>

      {/* Services Wrapper for horizontal layout */}
      <div className="services-wrapper">
        {/* Dine-In Services */}
        <div className="service">
          <FontAwesomeIcon icon={faUtensils} className="service-icon" />
          <h3>Dine-In Services</h3>
          <p>
            Enjoy a cozy dining experience with our premium seating and ambiance. We also offer 
            reservations for special occasions and group gatherings.
          </p>
        </div>

        {/* Catering Services */}
        <div className="service">
          <FontAwesomeIcon icon={faConciergeBell} className="service-icon" />
          <h3>Catering Services</h3>
          <p>
            We cater for weddings, parties, corporate events, and more. Our customizable menu 
            ensures your event is perfect and full of flavor.
          </p>
        </div>

        {/* Event Hosting */}
        <div className="service">
          <FontAwesomeIcon icon={faCalendarAlt} className="service-icon" />
          <h3>Event Hosting</h3>
          <p>
            Host your next event with us. We offer private spaces for birthdays, anniversaries, 
            or any special occasion. Tailored menus and impeccable service await.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
