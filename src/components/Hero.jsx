import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/heroImage.svg";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroSection__info">
        <h1 className="heroSection__title">Welcome to CD Planet</h1>
        <p className="heroSection__subtitle">
          Explore the World of Music in the ultimate destination for music
          enthusiasts
        </p>
        <button className="heroSection__button">
          <Link to={"/allproducts"}>Shop Now</Link>
        </button>
      </div>
      <img className="heroSection__img" src={HeroImg}></img>
    </div>
  );
};

export default Hero;
