import React, { useEffect, useState, useContext } from "react";

/*Firestore */
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//Component
import Card from "./Card";

import { CartContext } from "../context/CartContext";

const NewProdcuts = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "discs"),
        where("artist", "==", "Jose Madero")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h2 className="title">New in the store</h2>

      <div className="items">
        {product.map((product) => {
          return (
            <div key={product.id}>
              <Card product={product} addToCart={addToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProdcuts;
