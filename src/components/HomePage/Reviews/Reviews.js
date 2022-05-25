import React from 'react';

const Reviews = ({review}) => {
  //Data Destructing
  const {name, description, email, img} = review;
  return (
    <div className="card items-center shadow-xl gap-5">
      <div class="avatar">
        <div class="w-24 mask mask-squircle">
          <img src={img} />
        </div>
      </div>
      <div className="card-body p-3 pb-5 items-center">
        <h3 className='font-bold mt-0'>{name}</h3>
        <h6 style={{"font-size": '10px'}}>{description}</h6>
        <div class="rating">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;