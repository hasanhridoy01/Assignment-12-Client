import React, {useState, useEffect} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
  //card element all items
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const { _id, name, email, price } = order;

  useEffect(() => {
    fetch('https://whispering-fortress-42847.herokuapp.com/create-payment-intent', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({ price })
    })
    .then(res => res.json())
    .then(data => {
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    });

  }, [price])

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

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    setCardError(error?.message || '')

    // confirm card payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
              name: name,
              email: email
          },
        },
      },
    );
    
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }else{
      setCardError('');
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your payment is completed.')

      //store payment on database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://whispering-fortress-42847.herokuapp.com/order/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      }).then(res=>res.json())
      .then(data => {
          setProcessing(false);
          console.log(data);
          toast('Payment Successful!');
      })

    }
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
        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div className='text-green-500'>
            <p>{success}  </p>
            <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;