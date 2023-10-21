  // import React, { useEffect, useState } from 'react';

  // function ReviewList() {
  //   const [reviews, setReviews] = useState([]);

  //   useEffect(() => {
  //     // Replace this URL with the endpoint of your API
  //     fetch('https://example.com/api/reviews')
  //       .then((response) => response.json())
  //       .then((data) => setReviews(data))
  //       .catch((error) => console.error('Error fetching reviews:', error));
  //   }, []);

  //   return (
  //     <div>
  //       <h2>Customer Reviews</h2>
  //       <ul>
  //         {reviews.map((review) => (
  //           <li key={review.id}>
  //             <strong>{review.name}</strong> (Rating: {review.rating}):<br />
  //             {review.comment}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // export default ReviewList;

import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import '../components/comp-styles/ReviewList.css'; // Import your CSS file for styling
import { firestore } from '../config'; // Import the Firestore instance
  
  function ReviewList() {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const reviewsCollection = collection(firestore, 'reviews');
          const querySnapshot = await getDocs(reviewsCollection);
          const reviewData = [];
          querySnapshot.forEach((doc) => {
            reviewData.push({ id: doc.id, ...doc.data() });
          });
          setReviews(reviewData);
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      fetchReviews();
    }, []);
  
    return (
      <div className="review-list-container">
        <h2>Visitors Reviews</h2>
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <strong>{review.userEmail}</strong><br /> (Rating: {review.rating})
              </div>
              <div className="review-comment">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ReviewList;
  
