import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Alert from "react-bootstrap/Alert";

const CartPage = () => {
  const initialValues = {
    name: "",
    email: "",
    confirmEmail: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Email confirmation is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2 className="title">Complete your purchase</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="formContainer">
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="erorrMessage"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="erorrMessage"
              />
            </div>

            <div>
              <label htmlFor="confirmEmail">Confirm Email:</label>
              <Field type="email" id="confirmEmail" name="confirmEmail" />
              <ErrorMessage
                name="confirmEmail"
                component="div"
                className="erorrMessage"
              />
            </div>

            <button type="submit" className="card__button">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default CartPage;
