import React from "react";

//Pages
import Hero from "../components/Hero";
import NewProdcuts from "../components/NewProdcuts";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <Hero />
      <div className="infoSection">
        <p className="infoSection__text">
          Explore our vast collection of music CD's from various genres.
        </p>
      </div>
      <NewProdcuts />
    </div>
  );
};

export default HomePage;
