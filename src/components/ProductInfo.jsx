import React from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import addCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = ({ product }) => {
  const { addToCart } = React.useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className={styles.ProductInfo}>
      <div>
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
      <figure onClick={() => handleClick(product)}>
        <Image src={addCartImage} alt="" />
      </figure>
    </div>
  );
};

export default ProductInfo;
