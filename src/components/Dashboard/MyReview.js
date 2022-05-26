import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
  const [review, setReview] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://whispering-fortress-42847.herokuapp.com/review?Email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
          }
          return res.json()
      })
      .then(data => setReview(data));
    }
  }, [user])

  //handle cencle 
  const handleCencle = id => {
    const url = `https://whispering-fortress-42847.herokuapp.com/review/${user.email}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    .then(res => res.json())
    .then(data => {
      toast("Review Deleted Successful!");
    })
  }
  return (
    <div className='px-10'>
      <h4 className='text-xl text-secondary font-bold text-center'>My Review {review.length}</h4>
      <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Images</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                  review.map((r, index) =><tr>
                      <th>{index + 1}</th>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>
                        <img style={{"height": '50px', "weight": '100px'}} src={r.img} alt="" />
                      </td>
                      <td>
                        <button onClick={() => handleCencle(r._id)} className='btn btn-xs btn-gost'>Cencle</button>
                      </td>
                  </tr>)
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;