import React from 'react';

const Review = () => {
  return (
    <div className="card bg-base-200 shadow-xl mr-10 ml-10 mb-0 p-10 mt-5 text-center">
      <h1 className='text-4xl text-secondary mt-5'>Review</h1>
      <div className="divider text-success"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card items-center shadow-xl gap-5">
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src="https://i.ibb.co/fFhxcM7/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" />
            </div>
          </div>
          <div className="card-body p-3 pb-5 items-center">
            <h3 className='font-bold mt-0'>Jarry khan</h3>
            <h6 style={{"font-size": '10px'}}> Electronic Word of Mouth: A Genre Analysis of Product Reviews on Consumer Opinion Web Sites   Irene Pollach Vienna University of Economics and Business Administration irene.</h6>
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
        </div>
        <div className="card items-center shadow-xl gap-5">
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src="https://i.ibb.co/7YBLYbz/reza-biazar-e-Sjm-ZW97c-H8-unsplash-1.jpg" />
            </div>
          </div>
          <div className="card-body p-3 pb-5 items-center">
            <h3 className='font-bold mt-0'>Hasan Ali</h3>
            <h6 style={{"font-size": '10px'}}> Electronic Word of Mouth: A Genre Analysis of Product Reviews on Consumer Opinion Web Sites   Irene Pollach Vienna University of Economics and Business Administration irene.</h6>
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
        </div>
        <div className="card items-center shadow-xl gap-5">
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src="https://i.ibb.co/92PFzXW/pexels-roberto-hund-5357589.jpg" />
            </div>
          </div>
          <div className="card-body p-3 pb-5 items-center">
            <h3 className='font-bold mt-0'>Ali khan</h3>
            <h6 style={{"font-size": '10px'}}> Electronic Word of Mouth: A Genre Analysis of Product Reviews on Consumer Opinion Web Sites   Irene Pollach Vienna University of Economics and Business Administration irene.</h6>
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
        </div>
        <div className="card items-center shadow-xl gap-5">
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src="https://i.ibb.co/hH5JP6J/jordan-whitfield-Wj-Uy3-NY95y-U-unsplash.jpg" />
            </div>
          </div>
          <div className="card-body p-3 pb-5 items-center">
            <h3 className='font-bold mt-0'>sanbi khan</h3>
            <h6 style={{"font-size": '10px'}}> Electronic Word of Mouth: A Genre Analysis of Product Reviews on Consumer Opinion Web Sites   Irene Pollach Vienna University of Economics and Business Administration irene.</h6>
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;