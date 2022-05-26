import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://whispering-fortress-42847.herokuapp.com/user', {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return (
    <div className='px-10'>
      <h4>all user {users.length}</h4>
      <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>email</th>
                    <th>Admin</th>
                    <th>Access Label</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => <UserRow key={user._id} user={user}></UserRow>)
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;