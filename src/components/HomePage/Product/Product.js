import React from 'react';

const Product = ({product}) => {
  //Data Destructing
  const [id, name, shortDescription, minimumQuantity, availableQuantity] = product;
  return (
    <div>
      {/* {name} */}
    </div>
  );
};

export default Product;