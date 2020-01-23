import React from "react";

// Stylesheet
import "../css/ItemAddedMessage.scss";

const ItemAddedMessage = ({ setAddedToCartMessage }) => {
  return (
    <div className="item-added-message">
      <h1>The item has been added to your cart.</h1>
      <button onClick={setAddedToCartMessage}>Close</button>
    </div>
  );
};

export default ItemAddedMessage;
