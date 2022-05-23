import React from 'react';
import useProduct from '../../../Hooks/useProduct';

const AllProduct = () => {
  const [products, setProduct] = useProduct();
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
    {
      products.map(product => {
        return (
          <div>
            <div class="card lg:w-90 bg-base-300 shadow-xl">
              <figure><img src={product.img} alt="Shoes" /></figure>
              <div class="card-body items-center">
                <h2 class="card-title">{product.name}</h2>
                <p>singleItemsPrice $ :{product.price}</p>
                <p>minimumQuantity :{product.minimumQuantity}</p>
                <p>availableQuantity :{product.availableQuantity}</p>
                <p>shortDescription: {product.shortDescription.slice(0, 100)}</p>
                <div class="card-actions justify-end">
                    <a class="btn btn-primary" href='/purchase'>Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
  </div>
  );
};

export default AllProduct;