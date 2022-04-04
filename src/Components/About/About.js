import React from 'react';
import aboutImag from '../../Assets/Images/about.jpg';

const About = () => {
    return (
        <div >
            <div className="container">
                <div className="row g-5 row-cols-md-2 justify-content-center align-items-center">
                    <div>
                        <img className='img-fluid' src={aboutImag} alt="" />
                    </div>
                    <div>
                       <h2>About Us</h2>
                        <p className='text-muted pt-3'>Car Shop is an e-commerce adventure for the internet and is working with some professional dream-driven team members. We're trying to do everything a little differently. We only sell original items and cover car items and we focus on what you want it to be. We're not just an e-commerce company, we're also very dedicated to content-based and knowledge-based products that will give you extra comfort when shopping online with us. We deliver products very fast all over the country. Lots of powerful doses like great customer support, pre-sales and after-sales support, product details, etc. take us one step further. Customer support and satisfaction is our main strength. We're working really hard every moment to make your online shopping safe and enjoyable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;