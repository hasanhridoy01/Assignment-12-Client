import React from 'react';

const Carousel = () => {
  return (
   <div className="mt-20 mb-10 mr-10 ml-10">
     <h1 className='my-10 text-2xl font-bold text-secondary'>My Product Photos</h1>
      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
        </div>
      </div>
   </div>
  );
};

export default Carousel;