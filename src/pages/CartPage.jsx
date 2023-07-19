import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import MessageSuccess from "../components/MessageSuccess";

//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const initialState = {
  name: "",
  email: "",
  confirmEmail: "",
};

const CartPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);

  const { cartItems, removeFromCart, calculateTotalPrice } =
    useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h2 className="title">Complete your purchase</h2>
      <div>
        {cartItems.length === 0 ? (
          <p className="warning">No elements selected</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map((product) => (
                <li key={product.id}>
                  <p>{product.title} </p>
                  <p>{product.artist}</p>
                  <p>{product.price}</p>

                  <button onClick={() => removeFromCart(product.id)}>
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
            <p className="total">Total: {calculateTotalPrice()}</p>
          </div>
        )}
      </div>

      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              values={values.name}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              values={values.email}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="confirmEmail">Confirm Email:</label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              values={values.confirmEmail}
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="card__button">
            Submit
          </button>
        </form>
        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </div>
  );
};

export default CartPage;
