import React, { useState } from 'react';
import '../components/comp-styles/StarRating.css'; // Import your CSS file for styling

const StarRating = ({ initialRating = 0, maxRating = 5 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starClass = i <= rating ? 'star filled' : 'star';
      stars.push(
        <span
          key={i}
          className={starClass}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <p className="rating-text">{rating} out of {maxRating}</p>
    </div>
  );
};

export default StarRating;
