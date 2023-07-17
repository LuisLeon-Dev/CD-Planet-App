import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Firebase
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

//Components
import Card from "./Card";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "discs"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
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
              <Link to={`/detail/${product.id}`}>
                <Card data={product} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
