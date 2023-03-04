import { FC } from "react";

export interface ProductProps {
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
export const Product: FC<ProductProps> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};
