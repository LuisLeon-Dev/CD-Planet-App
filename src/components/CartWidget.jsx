import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Card from "./Card";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link to="/cart" className="cart">
      <p className="cart__number">{cartItems.lenght}</p>
      <Icon icon="mdi:shopping-cart" color="black" className="cart__img" />
    </Link>
  );
};

export default CartWidget;
