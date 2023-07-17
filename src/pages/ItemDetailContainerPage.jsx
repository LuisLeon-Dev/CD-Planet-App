import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*Firestore */
import { db } from "../services/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

/*Components*/
import ItemDetail from "../components/itemDetail";

const ItemDetailContainerPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "discs"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProduct(docs);
    };
    getProduct();
  }, [id]);

  return (
    <div>
      {product.map((data) => {
        return (
          <div key={data.id}>
            <ItemDetail data={data} />;
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainerPage;
