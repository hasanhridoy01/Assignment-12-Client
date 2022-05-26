import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../Dashboard/CheckoutForm.js'

const stripePromise = loadStripe('pk_test_51L0kkfAyr5g19mhrawg51CSrg6TNaDdKxm0Vtw3QoNP7jgRRpxahBQ1HbodJlL28h14wD8gfAMo1ruAp6oBrAYts00nUQvDZ9V');

const Payment = () => {
  const {paymentId} = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://whispering-fortress-42847.herokuapp.com/order/${paymentId}`, {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => setOrder(data));
  },[])
  return (
    <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">{order.email}</p>
                <h2 class="card-title">Please Pay for {order.name}</h2>
                <p>Please pay: ${order.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    </div>
  );
};

export default Payment;