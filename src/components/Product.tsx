import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType } from "../product-type";
import { ProductCard } from "./product-card";

/**
 * Products component fetches the products from the API and displays them
 * using the Product component
 *
 *
 * @return {*}
 */
export const Products = () => {
  const [products, setProducts]: any = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row">
        {products.map((product: ProductType) => {
          return (
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
};
