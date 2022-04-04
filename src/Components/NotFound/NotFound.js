import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center p-5 m-5'>
            <h1>404</h1>
            <h4>Oops! You're lost.</h4>
            <p>The page you are looking for was not found.</p>
            <Link to='/'><button className='my-btn'>Go to Home page</button></Link>
        </div>
    );
};

export default NotFound;