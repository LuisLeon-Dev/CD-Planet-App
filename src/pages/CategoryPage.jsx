import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/*Firestore */
import { db } from "../services/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

/*Components*/
import Card from "../components/Card";

const CategoryPage = () => {
  const { genre } = useParams();
  console.log(genre);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "discs"), where("genre", "==", genre));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProduct(docs);
    };
    getProduct();
  }, [genre]);

  return (
    <>
      <h2 className="title">Store Products </h2>
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
    </>
  );
};

export default CategoryPage;
