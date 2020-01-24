import React from "react";

// React Icons
import { FaShoppingBasket } from "react-icons/fa";

// Stylesheet
import "../css/ItemAddedMessage.scss";

const ItemAddedMessage = ({ setAddedToCartMessage }) => {
  setTimeout(setAddedToCartMessage, 2000);
  return (
    <div className="item-added-message">
      <FaShoppingBasket className="basket" />
      <h2>The item has been added to your basket.</h2>
    </div>
  );
};

export default ItemAddedMessage;
