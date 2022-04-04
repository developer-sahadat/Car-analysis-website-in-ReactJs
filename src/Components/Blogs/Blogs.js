import React from 'react';
import contextApiImage from '../../Assets/Images/ContextAPI.png'
import semanticImage from '../../Assets/Images/semanctic.jpg'
import elementImage from '../../Assets/Images/Inline-vs-Block.jpg'
import './blogs.css'
const Blogs = () => {
    return (
        <div className='m-5'>
            <div className="container p-5">
                <div className='shadow p-0 text-center parent'>
                    <div className="row">
                        <div className="col-4">
                            <img src={contextApiImage} className="img-fluid h-100 w-100" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>What is context Api in reactJS?</h4>
                            <p>Parent মধ্যে একটি শিশু উপাদানের ডেটার প্রয়োজন হবে৷ কিন্তু, কন্টেইনার উপাদান বা মাঝখানে শিশু উপাদানগুলির সেই ডেটার প্রয়োজন নাও হতে পারে৷ এই ক্ষেত্রে, যদিও মাঝের কম্পোনেন্টের ডেটার প্রয়োজন হয় না, তবে তাদের এটি শুধুমাত্র চাইল্ড কম্পোনেন্টে পাঠানোর জন্য গ্রহণ করতে হবে। যদি আপনার অ্যাপ্লিকেশনটি খুব বড় হয় তবে এটি একটি বড় সমস্যা সৃষ্টি করবে। ডেভেলপারদের এক থেকে পরবর্তী কম্পোনেন্টে ডেটা পাঠাতে হবে। এই সমস্যাটি প্রপস ড্রিলিং নামে পরিচিত। কনটেক্সট-এপিআই-এ কম্পোনেন্ট ট্রির বাইরে একটি আলাদা স্টোরেজ স্পেস তৈরি করা হয়েছে যেখানে আমাদের ডেটা সংরক্ষণ করতে হবে। এখন যদি আমাদের যে কোনও উপাদানের ভিতরে সেই ডেটার প্রয়োজন হয় তবে আমরা প্রসঙ্গ-এপিআই থেকে সরাসরি ডেটা অ্যাক্সেস করতে পারি।</p>
                         </div>
                    </div>
                </div>

                <div className='shadow p-0 text-center parent mt-5'>
                    <div className="row">
                        <div className="col-4">
                            <img src={semanticImage} className="img-fluid h-100 w-100" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>What is semantic HTML?</h4>
                            <p>Semantic  এইচটিএমএল (অর্থবোধক মার্কআপও বলা হয়) হল এইচটিএমএল কোড যা পৃষ্ঠা উপাদানগুলির উদ্দেশ্য কার্যকরভাবে বর্ণনা করতে HTML ট্যাগ ব্যবহার করে। শব্দার্থিক HTML কোড কম্পিউটার এবং মানুষের উভয়ের কাছে এর উপাদানগুলির অর্থ যোগাযোগ করে, যা ওয়েব ব্রাউজার, অনুসন্ধান ইঞ্জিন, সহায়ক প্রযুক্তি এবং মানব বিকাশকারীদের একটি ওয়েব পৃষ্ঠার উপাদানগুলি বুঝতে সহায়তা করে।</p>
                         </div>
                    </div>
                </div>
                <div className='shadow p-0 text-center parent mt-5'>
                    <div className="row">
                        <div className="col-4">
                             <img src={ elementImage} className="img-fluid h-100 w-100" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>what is difference between inline and block elements?</h4>
                            <p> <strong>ব্লক উপাদান:</strong> তারা তাদের পর্যাপ্ততা নির্বিশেষে উপলব্ধ সমগ্র প্রস্থ গ্রাস. তারা সর্বদা একটি নতুন লাইনে শুরু করে এবং তাদের উপরে এবং নীচের মার্জিন থাকে। এটির পাশে অন্য কোন উপাদান নেই।</p>
                            <p><strong>ইনলাইন উপাদান:</strong> ইনলাইন উপাদানগুলি শুধুমাত্র যথেষ্ট প্রস্থ দখল করে যা এটির জন্য যথেষ্ট এবং এটির পাশে থাকা অন্যান্য উপাদানগুলিকে অনুমতি দেয় যা ইনলাইন রয়েছে৷ ইনলাইন উপাদানগুলি একটি নতুন লাইন থেকে শুরু হয় না এবং ব্লক উপাদানগুলির মতো শীর্ষ এবং নীচের মার্জিন থাকে না।</p>
                         </div>
                    </div> 
            </div>
            
            </div>
        </div>
    );
};

export default Blogs;