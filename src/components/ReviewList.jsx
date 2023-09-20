import React, { useEffect, useState } from 'react';

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace this URL with the endpoint of your API
    fetch('https://example.com/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.name}</strong> (Rating: {review.rating}):<br />
            {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
