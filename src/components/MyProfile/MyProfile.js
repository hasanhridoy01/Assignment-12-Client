import React from 'react';

const MyProfile = () => {
  return (
    <div className='p-10 grid place-items-center bg-base-300'>
      <div class="card w-96 bg-base-100 shadow-xl my-10 items-center">
        <div class="avatar mt-10">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
        </div>
        <div class="card-body items-center">
          <h1 className='text-2xl font-bold'>Zahid Hasan Hridoy</h1>
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <div class="card-actions">
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;