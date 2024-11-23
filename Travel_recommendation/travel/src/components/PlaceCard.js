// src/components/PlaceCard.js
import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.img} alt={place.name} />
      <div className="place-info">
        <h2>{place.name}</h2>
        <p>{place.description}</p>
        <div className="place-footer">
          <span className="rating">Rating: {place.rating} / 5</span>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
