import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart">
      <p className="cart__number">2</p>
      <Icon icon="mdi:shopping-cart" color="black" className="cart__img" />
    </Link>
  );
};

export default CartWidget;
