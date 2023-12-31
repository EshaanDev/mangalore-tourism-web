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
import '../components/comp-styles/StarRating.css';
import { auth, firestore } from '../config'; // Import the Firestore instance


const ReviewInfo = ({beachData}) => {
  const [rating, setRating] = useState(3); // default rating
  const [review, setReview] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userReview, setUserReview] = useState('');
  const [userReviewExists, setUserReviewExists] = useState(false);
  const [signInMessage, setsignInMessage] = useState(false);

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
      const q = query(reviewsCollection, where('userEmail', '==', userEmail), where('place_id', '==', beachData.id));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUserReview(doc.data().review);
          setRating(parseInt(doc.data().rating));
        });
        setUserReviewExists(true);
      } else {
        setUserReview('');
        setRating(3);
        setUserReviewExists(false);
      }
    };
    if (userEmail) {
      fetchUserReview();
    }
  }, [userEmail, beachData.id]);

  const handleRatingChange = (newRating) => {
    if (!userReviewExists) {
      setRating(newRating);
    }
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmission = async () => {
    if (!userEmail) {
      setsignInMessage(true);
      return;
    }

    try {
      // Push the review data to the Firestore collection
      const reviewsCollection = collection(firestore, 'reviews');
      await setDoc(doc(reviewsCollection), {
        rating: rating.toString(),
        review: review.toString(),
        userEmail: userEmail,
        date: new Date().toISOString(),
        place: beachData.NAME,
        place_id: beachData.id,
      });

      setUserReview(review);
      setUserReviewExists(true);
    } catch (error) {
      console.log('Error adding document: ', error);
    }
    window.location.reload(true);
  };

  return (
    <>
      <section className="rating-review-section">
        <div className="rating-div">
        {userReviewExists ? (
              <div>
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={ratingValue} className='StarRating'>
                      <input
                        type="checkbox"
                        value={ratingValue}
                        checked={ratingValue <= rating}
                        onChange={() => { }}
                        style={{ display : 'none' }}
                        className='custom-checkbox'
                      />
                      <span style={{ color: (rating < ratingValue ) ? 'grey' : 'orange' }}>&#9733;</span>
                    </label>
                  );
                })}
              </div>
          ) : (
            <div>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={ratingValue} className='StarRating'>
                    <input
                      type="checkbox"
                      value={ratingValue}
                      checked={rating === ratingValue}
                      onChange={() => handleRatingChange(ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <span style={{ color: rating >= ratingValue ? 'orange' : 'gray' }}>&#9733;</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
        <div className="review-div">
          <h2>Write a Review</h2>
          {userReviewExists ? (
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
      {signInMessage && (
        <>
          <h1 className="warning">Please Sign in to Review.</h1>
          <span />
          <button className="OK" onClick={() => setsignInMessage(false)}>
            OK
          </button>
        </>
      )}

      <section className="Review-List-Section">
        <ReviewList beachData={beachData} />
      </section>
    </>
  );
};

export default ReviewInfo;
