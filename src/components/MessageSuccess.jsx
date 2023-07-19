import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "react-bootstrap/Alert";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <div>
      <Alert variant={"succes"}>
        Thank you for your purchase, here is the transaction ID: {purchaseID}
      </Alert>
    </div>
  );
};

export default MessageSuccess;
