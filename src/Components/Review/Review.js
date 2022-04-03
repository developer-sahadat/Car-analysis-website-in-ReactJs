import React from 'react';
import './review.css'
import {  StarIcon} from '@heroicons/react/solid'


const Review = ({reviewData}) => {
    const {description, img, name, rating}=reviewData

    let rating4;
    let rating5;
    if(rating===4){
        rating4=<span className='d-flex justify-content-center'>
            <StarIcon className='start' />
            <StarIcon className='start' />
            <StarIcon className='start' />
            <StarIcon className='start' />
            </span>
    }else{
        rating5=<span className='d-flex justify-content-center'>
            <StarIcon className='start' />
            <StarIcon className='start' />
            <StarIcon className='start' />
            <StarIcon className='start' />
            <StarIcon className='start' />
        </span>
    }


    return (
    <div className='mt-5 p-4'>
        <div className='our-customer-review   p-4 text-center text-white mt-md-5 mt-lg-0 mt-sm-5 mt-5'>
           <img src={img}  alt="" />
           <h3 className='pt-2'>{name}</h3>
           <h6>{rating4 ? rating4:rating5 }</h6>
           <p title={description} className="pt-2">{description.slice(0,100)}...</p>
        </div>
    </div>
    );
};

export default Review;