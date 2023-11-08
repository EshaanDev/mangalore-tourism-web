import React, { useState } from 'react';

function ReviewForm() {
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ review }),
            });
            if (response.ok) {
                // Review submitted successfully
                // You can add some feedback to the user
                setReview('');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div>
            <h2>Write a Review</h2>
            <form onSubmit={handleSubmit} method='POST'>
                <textarea className='review-text-box'
                    placeholder="Write your review here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit" className='review-sbt-btn'>Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;
