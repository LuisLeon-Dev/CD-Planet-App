import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data.thumbnail}
        alt="imagen del album"
        className="card__product-img"
      />
      <p className="card__product-name">{data.title}</p>
      <div className="card__info">
        <p className="card__producto-nameArtist">{data.artist}</p>
        <p className="card__product-price">$ {data.price}</p>
      </div>
      <button className="card__button">Add to Cart</button>
    </div>
  );
};

export default Card;
