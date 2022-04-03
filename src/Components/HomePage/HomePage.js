import React from 'react';
import useReview from '../../Hook/useReview/useReview';
import Products from '../Products/Products';
import Review from '../Review/Review';

const HomePage = () => {

const [review, setReview]=useReview()


    return (
        <div>
            <Products/>

            <div className='bg-light p-5'>
                <h2 className='text-center pb-5'>Our Customers Reviews</h2>
                <div className="container">
                    <div className="row row-cols-lg-3 g-5 mt-5">
                        {
                            review.slice(0,3).map(reviewData=><Review 
                                reviewData={reviewData}
                                key={reviewData.id}
                                />)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;