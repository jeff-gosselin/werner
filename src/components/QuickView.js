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
          <img
            className="quick-view-window-img"
            src={`${process.env.PUBLIC_URL}/samples/${item.imgURL}`}
            alt=""
          />

          <div className="quick-view-window-title">
            <h2>{item.name}</h2>
            <h4>
              Model &nbsp; <span>{item.model}</span>
            </h4>
          </div>

          <div className="quick-view-window-info">
            <ul>
              <li>
                <span>PRICE</span>
                <p>{`$${item.price} / sqft`}</p>
              </li>
              <li>
                <span>MATERIAL</span>
                <p>{item.type}</p>
              </li>
              <li>
                <span>SIZE</span>
                <p>{item.size}</p>
              </li>
            </ul>
          </div>

          <div className="quick-view-window-subtotal">
            <h3>{` $${item.price * 20 * qty}`}</h3>
          </div>

          <div className="quick-view-window-input">
            <button className="minus" onClick={decrement}>
              -
            </button>
            <input
              type="text"
              value={`${qty} ${qty === 1 ? "Box" : "Boxes"}`}
            />
            <button className="plus" onMouseDown={increment}>
              +
            </button>
          </div>

          <div className="quick-view-window-cta">
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
