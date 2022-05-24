import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [users , setUsers] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res => res.json())
    .then(data => setUsers(data));
  },[users]);

  //form submit
  const handleFormSubmit = e => {
    e.preventDefault();

    //get input value
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;

    //user object
    const user = {name: name, phone: phone, address: address};

    //data send to database
    const url = `http://localhost:5000/updateuser/${email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      toast.success('User Profile Updated done');
    });
  }
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
          <form action="" onSubmit={handleFormSubmit}>
            <input type="text" name='name' readOnly disabled value={user.displayName} placeholder="Type here" class="input input-bordered input-info w-full max-w-lg mb-2" />
            <input type="text" name='email' readOnly disabled value={user.email} placeholder="Type here" class="input input-bordered input-info w-full max-w-lg mt-2" />
            <input name='phone' defaultValue={users?.phone} type="text" placeholder="Type here Phone Number" class="input input-bordered input-info w-full max-w-lg mt-2" />
            <textarea name='address' defaultValue={users?.address} class="textarea textarea-primary mt-2" placeholder="Type your address"></textarea>
            <div class="card-actions">
              <button class="btn btn-primary mt-1">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;