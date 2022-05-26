import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
  const {_id, email, role} = user;

  //make admin
  const handleAdmin = () => {
    const url = `https://whispering-fortress-42847.herokuapp.com/user/admin/${email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(response => {
      if(response.status === 403){
        toast.error('You are Not Admin Failed to make an admin');
      }
      return response.json();
    })
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Make admin successful!');
      }
    })
  }

  //handle Remove user
  const handleDeleteUser = (id) => {
    const url = `https://whispering-fortress-42847.herokuapp.com/user/${email}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    .then(res => res.json())
    .then(data => {
      toast("User Deleted Successful!");
    })
  }
  return (
    <tr>
        <td>{email}</td>
        <td>{role !== "admin" && <button onClick={handleAdmin} className='btn btn-xs'>Make Admin</button>}</td>
        <td>{role === "admin" ? <h5 className='text-secondary font-bold'>Admin</h5> : <h5 className='text-primary font-bold'>No Admin</h5>}</td>
        <td>{ role !== "admin" && <button onClick={() => handleDeleteUser(_id)} className='btn btn-xs'>Remove User</button>}</td>
    </tr>
  );
};

export default UserRow;