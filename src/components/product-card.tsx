import { FC } from "react";

export interface ProductCardProps {
  /**
   * title of the product
   *
   * @type {string}
   * @memberof ProductProps
   */
  title: string;
  /**
   * price of the product
   *
   * @type {number}
   * @memberof ProductProps
   */
  price: number;
  /**
   * description of the product
   *
   * @type {string}
   * @memberof ProductProps
   */
  description: string;
  /**
   * image of the product
   *
   * @type {string}
   * @memberof ProductProps
   */
  image: string;
}

/**
 * Product component displays the product details
 *
 * @param {*} {
 *   title,
 *   price,
 *   description,
 *   image,
 * }
 * @return {*}
 */
export const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <div className="card m-2 p-2 bg-dark" style={{ width: "18rem" }}>
      <div
        className="d-flex justify-content-center w-100 border border-secondary p-3 bg-white"
        style={{ height: "200px" }}
      >
        <img src={image} alt={title} className="card-img-top w-75" />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="text-light text-center">{title}</h5>
        <button className="btn btn-success">View Product</button>
        {/* <p className="card-text">{description}</p>
        <p>{price}</p> */}
      </div>
    </div>
  );
};
