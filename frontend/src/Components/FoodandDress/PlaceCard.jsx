import React from 'react';
import './PlaceCard.css';

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <div className="image">
        <img src={place.image} alt={place.name} />
      </div>
      <div className="place-details">
        <h2>{place.name}</h2>
        <p>{place.description}</p>
        <p>{place.location}</p>
        <div className="btn_cart">
          <button className="visit-button">Visit</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
