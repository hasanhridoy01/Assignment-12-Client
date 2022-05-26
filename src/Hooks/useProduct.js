import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://whispering-fortress-42847.herokuapp.com/items')
    .then(response => response.json())
    .then(data => setProduct(data));
  },[])
  return [products, setProduct];
}

export default useProduct;