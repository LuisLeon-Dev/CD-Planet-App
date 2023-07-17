import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/*Firestore */
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//Component
import Card from "./Card";

const NewProdcuts = () => {
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
      console.log(docs);
      setProduct(docs);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h2 className="title">New in the store</h2>

      <div className="items">
        {product.map((data) => {
          return (
            <div key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <Card data={data} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProdcuts;
