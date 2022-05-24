import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const {itemsId} = useParams();
  const [items, setItems] = useState({});
 
  useEffect(() => {
    //set url
    const url = `http://localhost:5000/items/${itemsId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setItems(data));
  },[]);

  //get minimum and available Quantity
  const minimumQuantity = items.minimumQuantity;
  const availableQuantity = items.availableQuantity;
  const img = items.img;

  //handleFormSubmit
  const handleItemsSubmit = e => {
    e.preventDefault();
    
    //get input value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    //order data object
    const order = {email: email, name: name, img: img, price: price, quantity: quantity};
    
    //check minimum and available quantity
    if(minimumQuantity > quantity){
      toast('you cannot able to reduce the quantity below the minimum order quantity');
    }else if(availableQuantity < quantity){
      toast('the order quantity can not be higher than the available quantity');
    }else{
      const url = 'http://localhost:5000/order';
      fetch(url, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          toast.success('your order added successful!');
        }else{
          toast.error('You already have an Order');
        }
      })
    }
  }

  return (
    <div className='p-10 grid place-items-center bg-base-300'>
      <div class="card w-96 bg-base-100 shadow-xl my-10">
        <figure class="px-10 pt-10">
          <img src={items.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold text-3xl text-primary">{items.name}</h2>
          <p><span className='text-secondary font-bold'>singleItemsPrice</span>: {items.price}</p>
          <p><span className='text-secondary font-bold'>minimumQuantity</span>: {items.minimumQuantity}</p>
          <p><span className='text-secondary font-bold'>availableQuantity</span>: {items.availableQuantity}</p>
          <p><span className='text-secondary font-bold'>shortDescription</span>: {items.shortDescription}</p>
          <form action="" onSubmit={handleItemsSubmit}>
            <input type="text" readOnly name='email' value={user.email} placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mb-1" />
            <input type="text" name='name' value={items.name} readOnly placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mb-1" />
            <input type="text" name='price' value={items.price} readOnly placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
            <input type="text" name='quantity' placeholder="Type here Quantity" class="input input-bordered input-info w-full max-w-xs mt-1" />
            <div class="card-actions">
              <button class="btn btn-primary mt-2">Buy Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;