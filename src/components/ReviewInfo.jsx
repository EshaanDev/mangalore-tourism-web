// import { collection, doc, setDoc } from 'firebase/firestore';
// import React, { useState } from 'react';
// import ReviewList from '../components/ReviewList';
// import StarRating from '../components/StarRating';
// import { firestore } from '../config'; // Import the Firestore instance

// const ReviewInfo = () => {
//   const [rating, setRating] = useState(3); // default rating
//   const [review, setReview] = useState('');

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleReviewSubmission = async () => {
//     try {
//       // Push the review data to the Firestore collection
//       const reviewsCollection = collection(firestore, 'reviews');
//       await setDoc(doc(reviewsCollection), {
//         rating: rating.toString(),
//         review: review.toString(),
//       });
  
//       // Clear the input fields after submission
//       // setRating(3);
//       // setReview('');
//     } catch (error) {
//       console.log('Error adding document: ', error);
//     }
//   };
  

//   return (
//     <>
//       <section className="rating-review-section">
//         <div className="rating-div">
//           <StarRating initialRating={rating} maxRating={5} onRatingChange={handleRatingChange} />
//         </div>
//         <div className="review-div">
//           <p>Write a Review</p>
//           <textarea value={review} onChange={handleReviewChange} placeholder="Enter your review..." className="review-text-box" />
//           <button onClick={handleReviewSubmission} className="review-sbt-btn">
//             Submit Review
//           </button>
//         </div>
//       </section>
//       <section className="Review-List-Section">
//         <ReviewList />
//       </section>
//     </>
//   );
// };

// export default ReviewInfo;

import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import StarRating from '../components/StarRating';
import { auth, firestore } from '../config'; // Import the Firestore instance

const ReviewInfo = () => {
  const [rating, setRating] = useState(3); // default rating
  const [review, setReview] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userReview, setUserReview] = useState('');
  const [userReviewExists, setUserReviewExists] = useState(false);

  // Get the current user's email
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return unsubscribe;
  }, []);

  // Fetch the user's review if it exists
  useEffect(() => {
    const fetchUserReview = async () => {
      const reviewsCollection = collection(firestore, 'reviews');
      const q = query(reviewsCollection, where('userEmail', '==', userEmail));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUserReview(doc.data().review);
        });
        setUserReviewExists(true);
      }
    };
    if (userEmail) {
      fetchUserReview();
    }
  }, [userEmail]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmission = async () => {
    try {
      // Push the review data to the Firestore collection
      const reviewsCollection = collection(firestore, 'reviews');
      await setDoc(doc(reviewsCollection), {
        rating: rating.toString(),
        review: review.toString(),
        userEmail: userEmail,
      });

      // Update userReview with the latest review
      setUserReview(review);
      // Clear the input fields after submission
      setRating(3);
      setReview('');
      setUserReviewExists(true); // Set user review status to true after submission
    } catch (error) {
      console.log('Error adding document: ', error);
      
    }
  };

  return (
    <>
      <section className="rating-review-section">
        <div className="rating-div">
          <StarRating initialRating={rating} maxRating={5} onRatingChange={handleRatingChange} />
        </div>
        <div className="review-div">
          <h2>Write a Review</h2>
          {userReviewExists ? (
            // <p>{userReview}</p>
            <textarea
            value={userReview}
            onChange={handleReviewChange}
            placeholder="Enter your review..."
            className="review-text-box"
            disabled
          />
          ) : (
            <textarea
              value={review}
              onChange={handleReviewChange}
              placeholder="Enter your review..."
              className="review-text-box"
            />
          )}
          {userReviewExists ? (
            <h4>Submitted</h4>
          ) : (
            <button onClick={handleReviewSubmission} className="review-sbt-btn">
              Submit Review
            </button>
          )}
        </div>
      </section>
      <section className="Review-List-Section">
        <ReviewList />
      </section>
    </>
  );
};

export default ReviewInfo;

