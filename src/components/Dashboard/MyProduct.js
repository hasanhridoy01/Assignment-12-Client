import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProduct = () => {
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://whispering-fortress-42847.herokuapp.com/item?Email=${user.email}`, {
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
      .then(data => setProduct(data));
    }
  }, [user])

  //handle delete product
  const handleDelete = id => {
    const url = `https://whispering-fortress-42847.herokuapp.com/item/${user.email}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    .then(res => res.json())
    .then(data => {
      toast("Items Deleted Successful!");
    })
  }
  return (
    <div className='px-10'>
      <h3 className='text-xl text-center text-secondary'>My Added Product {product.length}</h3>
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
                  product.map((p, index) =><tr>
                      <th>{index + 1}</th>
                      <td>{p.name}</td>
                      <td>{p.email}</td>
                      <td>
                        <img style={{"height": '50px', "weight": '100px'}} src={p.img} alt="" />
                      </td>
                      <td>
                        <button onClick={() => handleDelete(p._id)} className='btn btn-xs btn-gost'>Delete</button>
                      </td>
                  </tr>)
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;