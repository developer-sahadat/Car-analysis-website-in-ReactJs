import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hook/useReview/useReview';
import Products from '../Products/Products';
import Review from '../Review/Review';
import './HomePage.css'

const HomePage = () => {

const [review]=useReview()


    return (
        <div>
            {/* It's a product component */}
                <Products/>

            {/* Here is the work done for the homepage review */}
            <div className='bg-light p-5'>
                <h2 className='text-center pb-5 pt-2 customers-reviews'> <span>O</span>ur <span>C</span>ustomers <span>R</span>eviews</h2>
                <div className="container">
                    <div className="row row-cols-lg-3 g-5 mt-5">
                        {
                            review.slice(0,3).map(reviewData=><Review 
                                reviewData={reviewData}
                                key={reviewData.id}
                                />)
                        }
                        <div className='text-center w-100'>
                        <Link to='/reviews' ><button className='my-btn'>See all reviews</button></Link>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;