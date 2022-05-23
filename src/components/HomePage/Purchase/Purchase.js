import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const {itemsId} = useParams();
  const [items, setItems] = useState({});
 
  useEffect(() => {
    //set url
    const url = `http://localhost:5000/items/${itemsId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setItems(data));
  },[])

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
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;