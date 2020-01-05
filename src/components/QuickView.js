import React from "react";

// Stylesheet
import "../css/QuickView.scss";

const QuickView = ({ item, quickView, setQuickView, addToCart }) => {
  console.log("item: ", item);
  const qv =
    item && quickView ? (
      <div className="quick-view">
        <div className="quick-view-window">
          <h2>{item.name}</h2>
          {/* <img src={} /> */}
          <button onClick={e => addToCart(e, item)}>Add to Cart</button>
        </div>
        <div onClick={setQuickView} className="quick-view-backdrop"></div>
      </div>
    ) : null;
  console.log(quickView);
  return qv;
};

export default QuickView;
