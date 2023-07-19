import React, { useContext } from "react";
import { useEffect, useState } from "react";
//Firebase
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

//Components
import Card from "./Card";
import { CartContext } from "../context/CartContext";

const ItemListContainer = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "discs"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="items">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Card product={product} addToCart={addToCart} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
