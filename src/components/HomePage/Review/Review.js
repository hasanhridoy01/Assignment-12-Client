import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setReviews(data));
  },[])
  return (
    <div className="card bg-base-200 shadow-xl mr-10 ml-10 mb-0 p-10 mt-5 text-center">
      <h1 className='text-4xl text-secondary mt-5'>Review</h1>
      <div className="divider text-success"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
        }
      </div>
    </div>
  );
};

export default Review;