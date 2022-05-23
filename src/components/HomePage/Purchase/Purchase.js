import React from 'react';

const Purchase = () => {
  return (
    <div className='p-10 grid place-items-center bg-base-300'>
      <div class="card w-96 bg-base-100 shadow-xl my-10">
        <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold text-3xl text-primary">Flashlight</h2>
          <p><span className='text-secondary font-bold'>singleItemsPrice</span>: $100</p>
          <p><span className='text-secondary font-bold'>minimumQuantity</span>: 100</p>
          <p><span className='text-secondary font-bold'>availableQuantity</span>: 1000</p>
          <p><span className='text-secondary font-bold'>shortDescription</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ad odit dolor facere accusantium officia veniam repellat, velit nisi mollitia culpa dolorem at sunt sequi minus dolores cupiditate aliquid magnam!</p>
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;