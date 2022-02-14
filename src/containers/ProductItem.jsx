import React from 'react';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductItem.module.scss'

const ProductItem = ({ product }) => {
  return (
    <div className={styles.ProductItem}>
			<img src={product.images[0]} alt={product.title} />
			<ProductInfo product={product} />
		</div>
  );
};

export default ProductItem;
