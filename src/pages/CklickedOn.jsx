import React from "react";
import "../App.css";

const ClickedOn = ({ product, onClose }) => {
  const { name, price, visible, onSale, src, specs } = product;

  return (
    <div className="details">
      <div className="details-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        {visible && onSale && (
          <p style={{ color: "green" }}>
            Discounted Price is ₾{(price * 0.8).toFixed(2)}{" "}
          </p>
        )}
        {visible && !onSale && (
          <p style={{ color: "red" }}>
            No Discount on this product. Original price is ₾{price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClickedOn;
