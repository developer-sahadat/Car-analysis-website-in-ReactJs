import React from 'react';
import useReview from '../../Hook/useReview/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [review]=useReview()
    return (
        
    // Component of showing all reviews
        <div className='m-5'>
            <h2 className='pb-5 mb-5 text-center'>All Customers Reviews</h2>
            <div className="container">
                <div className="row row-cols-lg-3 g-5">
                    { 
                            review.map(reviewData=><Review 
                                reviewData={reviewData}
                                key={reviewData.id}
                                />) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;