import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/*Firestore */
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

/*Components*/
import Card from "../components/Card";

import { CartContext } from "../context/CartContext";

const CategoryPage = () => {
  const { genre } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "discs"), where("genre", "==", genre));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProduct();
  }, [genre]);

  return (
    <>
      <h2 className="title">Store Products </h2>
      <div className="items">
        {product.map((product) => {
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

export default CategoryPage;
