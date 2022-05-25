import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = ({ order }) => {
  const { name, email, price } = order;
  //card element all items
  const stripe = useStripe();
  const elements = useElements();

  //handle submit 
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
        return;
    }

    
    alert();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;