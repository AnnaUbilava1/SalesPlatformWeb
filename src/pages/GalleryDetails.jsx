import React from "react";
import "../App.css";

function GalleryDetails({ product, onClose }) {
  const { name, price, visible, onSale, src, specs } = product;

  return (
    <div className="details">
      <div className="details-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3 style={{ color: "black" }}>{name}</h3>
        <h5 style={{ color: "black" }}>{specs}</h5>
        {onSale ? (
          <p style={{ color: "green" }}>
            Discounted Price is ₾{price - price / 5}{" "}
          </p>
        ) : (
          <p style={{ color: "red" }}>No Discount on this product.</p>
        )}
      </div>
    </div>
  );
}

export default GalleryDetails;
