import React from 'react';

const Carousel = () => {
  return (
   <div className="mt-20 mb-10 mr-10 ml-10 text-center">
     <h1 className='my-10 text-2xl font-bold text-secondary'>My Future Product</h1>
      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src="https://i.ibb.co/j5JHsSH/download-2.jpg" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/zhV4V74/download-3.jpg" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/yNvwDmt/top-electrical-tools-1152575-08-allenwrenchhex-3248-1277da88a43c47e6bfb3941bf0adbb8b.webp" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/y8K5rz3/banner.webp" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/BzkrTs7/top-electrical-tools-1152575-04-flashlight-3228-b87356b13a1944118479ab50f249e2cd.webp" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/xFNg351/download.jpg" alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/jZZjGJq/download-1.jpg" alt="Pizza" />
        </div>
      </div>
   </div>
  );
};

export default Carousel;