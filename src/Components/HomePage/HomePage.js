import React from 'react';
import Products from '../Products/Products';

const HomePage = () => {
    return (
        <div>
            <Products/>

            <div className='bg-light p-5'>
                <h2 className='text-center'>Our Customers Reviews</h2>
            </div>

        </div>
    );
};

export default HomePage;