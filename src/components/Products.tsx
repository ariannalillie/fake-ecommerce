import axios from "axios";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {console.log(products)}
    </>
  );
};
