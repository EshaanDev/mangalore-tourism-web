// import React, { useState } from 'react';

// function ReviewForm() {
//     const [review, setReview] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/reviews', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ review }),
//             });
//             if (response.ok) {
//                 // Review submitted successfully
//                 // You can add some feedback to the user
//                 setReview('');
//             }
//         } catch (error) {
//             console.error('Error submitting review:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Write a Review</h2>
//             <form onSubmit={handleSubmit}>
//                 <textarea className='review-text-box'
//                     placeholder="Write your review here..."
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                 />
//                 <button type="submit" className='review-sbt-btn'>Submit</button>
//             </form>
//         </div>
//     );
// }

// export default ReviewForm;





// / import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import ReviewList from '../components/ReviewList';
// import StarRating from '../components/StarRating';
// import { auth, firestore } from '../config'; // Import the Firestore instance

// const ReviewInfo = ({ beachData }) => {
//   const [rating, setRating] = useState(3); // default rating
//   const [review, setReview] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userReview, setUserReview] = useState('');
//   const [userReviewExists, setUserReviewExists] = useState(false);
//   const [signInMessage, setsignInMessage] = useState(false);

//   // Get the current user's email
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserEmail(user.email);
//       }
//     });
//     return unsubscribe;
//   }, []);

//   // Fetch the user's review if it exists
//   useEffect(() => {
//     const fetchUserReview = async () => {
//       const reviewsCollection = collection(firestore, 'reviews');
//       const q = query(reviewsCollection, where('userEmail', '==', userEmail), where('place', '==', beachData.id));
//       const querySnapshot = await getDocs(q);
//       if (!querySnapshot.empty) {
//         querySnapshot.forEach((doc) => {
//           setUserReview(doc.data().review);
//           setRating(parseInt(doc.data().rating));
//         });
//         setUserReviewExists(true);
//       } else {
//         setUserReview('');
//         setRating(3);
//         setUserReviewExists(false);
//       }
//     };
//     if (userEmail) {
//       fetchUserReview();
//     }
//   }, [userEmail, beachData.id]);

//   const handleRatingChange = (newRating) => {
//     if (!userReviewExists) {
//       setRating(newRating);
//     }
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleReviewSubmission = async () => {
//     if (!userEmail) {
//       setsignInMessage(true);
//       return;
//     }

//     try {
//       const reviewsCollection = collection(firestore, 'reviews');
//       await setDoc(doc(reviewsCollection), {
//         rating: rating.toString(),
//         review: review.toString(),
//         userEmail: userEmail,
//         date: new Date().toISOString(),
//         place: beachData.id,
//       });

//       setUserReview(review);
//       setUserReviewExists(true);
//     } catch (error) {
//       console.log('Error adding document: ', error);
//     }
//   };

//   return (
//     <>
//       <section className="rating-review-section">
//         <div className="rating-div">
//           {userReviewExists ? (
//             <StarRating initialRating={rating} maxRating={5} readonly />
//           ) : (
//             <StarRating initialRating={rating} maxRating={5} onRatingChange={handleRatingChange} />
//           )}
//         </div>
//         <div className="review-div">
//           <h2>Write a Review</h2>
//           {userReviewExists ? (
//             <textarea
//               value={userReview}
//               onChange={handleReviewChange}
//               placeholder="Enter your review..."
//               className="review-text-box"
//               disabled
//             />
//           ) : (
//             <textarea
//               value={review}
//               onChange={handleReviewChange}
//               placeholder="Enter your review..."
//               className="review-text-box"
//             />
//           )}
//           {userReviewExists ? (
//             <h4>Submitted</h4>
//           ) : (
//             <button onClick={handleReviewSubmission} className="review-sbt-btn">
//               Submit Review
//             </button>
//           )}
//         </div>
//       </section>
//       {signInMessage && (
//         <>
//           <h1 className="warning">Please Sign in to Review.</h1>
//           <span />
//           <button className="OK" onClick={() => setsignInMessage(false)}>
//             OK
//           </button>
//         </>
//       )}

//       <section className="Review-List-Section">
//         <ReviewList beachID={beachData.id} />
//       </section>
//     </>
//   );
// };

// export default ReviewInfo;
