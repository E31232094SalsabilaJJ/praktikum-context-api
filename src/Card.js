import React from "react";
import styles from "./Card.module.css";

const Card = ({ product, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.cardImage}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <p className={styles.cardDescription}>{product.description}</p>

        <div className={styles.cardPrice}>
          Rp {product.price.toLocaleString("id-ID")}
        </div>

        <button
          className={styles.cardButton}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
