import React from "react";
import '@styles/ProductInfo.scss';
import AppContext from "../context/AppContext";
import addCartImage from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({ product }) => {
  const { addToCart } = React.useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className="ProductInfo">
      <div>
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
      <figure onClick={() => handleClick(product)}>
        <img src={addCartImage} alt="" />
      </figure>
    </div>
  );
};

export default ProductInfo;
