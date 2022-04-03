import React from 'react';
import car from '../../Assets/Images/car.png'
import './Products.css'

const Products = () => {
    return (
        <div className='shadow-sm p-5 products'>
            <div className='container'>
                <div className="row g-5 row-cols-md-2 justify-content-center  align-items-center">
                    <div>
                        <img src={car} className='img-fluid' alt="" />
                    </div>

                    <div>
                        <h2>BMW 3 Series</h2>
                        <p>Prices for the BMW 3 Series start at $ 43.6 million and go up to $ 62.9 million See the on-road pricing of the entire BMW 3 Series variant. Find out more about the new BMW 3 Series models, videos, latest news, and more about the four-wheeled ex-showroom price of the up-to-date 3 Series.....</p>
                        <button>Buy Now</button>
                    </div>
                
                </div> 
            </div>  
        </div>
    );
};

export default Products;