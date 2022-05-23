import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../CommonPages/Loading/Loading';

const MyProfile = () => {
  const [users , setUsers] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div className='p-10 grid place-items-center bg-base-300'>
      <div class="card w-96 bg-base-100 shadow-xl my-10 items-center">
        <div class="avatar mt-10">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
        </div>
        <div class="card-body items-center">
          <h1 className='text-2xl font-bold'>{user.displayName}</h1>
          <input type="text" readOnly disabled value={user.displayName} placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" readOnly disabled value={user.email} placeholder="Type here" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" placeholder="Type here Phone Number" class="input input-bordered input-info w-full max-w-lg" />
          <input type="text" placeholder="Type here Address" class="input input-bordered input-info w-full max-w-lg" />
          <div class="card-actions">
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;