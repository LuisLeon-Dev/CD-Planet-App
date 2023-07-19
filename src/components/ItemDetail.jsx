import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const songsArray = data.songsList;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="detailContainer">
      <div>
        <img
          src={data.thumbnail}
          className="detailContainer__img"
          alt="imagen del album"
        ></img>
        <div className="checkOut">
          <p className="checkOut__price">$ {data.price}</p>
          <button className="checkOut__button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="albumInfo">
        <h2 className="albumInfo__title">{data.title}</h2>
        <p className="albumInfo__artist">{data.artist}</p>
        <p className="albumInfo__releasedYear">
          Album Released: {data.releasedYear}
        </p>
        <p className="albumInfo__time">{data.time}</p>
        <ul id="songsNames" className="albumInfo__songs">
          Songs:
          {songsArray.map((songs, index) => {
            return (
              <li key={index}>
                {index + 1} - {songs}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;
