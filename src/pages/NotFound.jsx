import React from "react";
import NotFoundImg from "../assets/notFound.svg";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={NotFoundImg} alt="" className="notFound__img" />
      <p className="notFound__text">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
