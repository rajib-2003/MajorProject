import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';
import './PlaceCardPage.css';

const PlaceCardPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/places');
        const data = await response.json();
        setPlaces(data);
      } catch (err) {
        console.error('Error fetching places:', err);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className="place">
      <h1>Places to Visit</h1>
      <div className="place-card-container">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlaceCardPage;
