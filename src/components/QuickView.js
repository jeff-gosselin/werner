import React, { useState } from "react";

// Stylesheet
import "../css/QuickView.scss";

const QuickView = ({ item, quickView, setQuickView, addToCart }) => {
  console.log("item: ", item);

  const [qty, setQty] = useState(1);

  const decrement = () => {
    if (qty !== 1) {
      setQty(qty - 1);
    }
  };

  const increment = () => {
    setQty(qty + 1);
  };

  const qv =
    item && quickView ? (
      <div className="quick-view">
        <div className="quick-view-window">
          <h2>{item.name}</h2>
          <img
            className="quick-view-window-img"
            src={`${process.env.PUBLIC_URL}/samples/${item.imgURL}`}
            alt=""
          />
          <div class="quick-view-window-info">
            <ul className="details">
              <li>{`$${item.price} / sqft`}</li>
              <li>
                <span>Material:</span> {item.type}
              </li>
              <li>
                <span>Size:</span> {item.size}
              </li>
              <li>
                <span>Subtotal: </span> {` $${item.price * 20 * qty}`}
              </li>
            </ul>
          </div>
          <div class="quick-view-window-input">
            Qty: &nbsp;
            <button onClick={decrement}>-</button>
            <input type="text" value={qty} />
            <button onClick={increment}>+</button>
          </div>
          <div class="quick-view-window-cta">
            <button onClick={e => addToCart(e, item, qty)}>Add to Cart</button>
          </div>
        </div>
        <div onClick={setQuickView} className="quick-view-backdrop"></div>
      </div>
    ) : null;
  console.log(quickView);
  return qv;
};

export default QuickView;
