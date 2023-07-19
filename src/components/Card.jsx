import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, addToCart }) => {
  const { title, artist, price } = product;

  const handleAddToCart = () => {
    const products = {
      title,
      artist,
      price,
    };
    addToCart(products);
  };
  return (
    <div className="card">
      <Link to={`/detail/${product.id}`}>
        <img
          src={product.thumbnail}
          alt="imagen del album"
          className="card__product-img"
        />
        <p className="card__product-name">{product.title}</p>
        <div className="card__info">
          <p className="card__producto-nameArtist">{product.artist}</p>
          <p className="card__product-price">$ {product.price}</p>
        </div>
      </Link>
      <button className="card__button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
