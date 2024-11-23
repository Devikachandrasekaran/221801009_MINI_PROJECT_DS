import React from 'react';
import './Recommendation.css';

const Recommendation = ({ recommendation }) => {
    const { City, Combined_Score } = recommendation || {};

    return (
        <div className="recommendation">
            <img src="placeholder.jpg" alt="Recommendation" className="image" />
            <div className="info">
                <h3>{City || "No City Available"}</h3>
                <p>Rating: {Combined_Score !== undefined ? `${Combined_Score}/5` : "No rating available"}</p>
                <button className="book-now">Book Now</button>
            </div>
        </div>
    );
};

export default Recommendation;