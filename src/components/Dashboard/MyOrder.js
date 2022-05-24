import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        fetch(`http://localhost:5000/order?Email=${user.email}`, {
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
        .then(data => setOrder(data));
      }
    }, [user])

  return (
    <div className='px-10'>
        <h2 className='mt-3 mb-3'>My Order: {order.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Images</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      order.map((o, index) =><tr>
                          <th>{index + 1}</th>
                          <td>{o.name}</td>
                          <td>{o.email}</td>
                          <td>{o.price}</td>
                          <td>
                            <img style={{"height": '50px', "weight": '100px'}} src={o.img} alt="" />
                          </td>
                          <td>
                            {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                            {(o.Price && o.paid) && <span className='text-success'>Paid</span>}
                            </td>
                      </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default MyOrder;