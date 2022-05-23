import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
    .then(response => response.json())
    .then(data => setProduct(data));
  },[])
  return [products, setProduct];
}

export default useProduct;