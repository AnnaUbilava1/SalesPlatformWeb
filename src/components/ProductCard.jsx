import React, { useState } from "react";
import "../App.css";
import ClickedOn from "../pages/CklickedOn";

const ProductCard = ({ product, addToCart }) => {
  const { name, price, visible, onSale, src, specs } = product;

  const [showDetails, setShowDetails] = useState(false);

  const cardStyle = {
    opacity: visible ? 1 : 0.5, // Fade if not visible
    pointerEvents: visible ? "auto" : "none", // Disable if not visible
  };

  const handleAddToCart = () => {
    if (visible) {
      addToCart(product);
    }
  };

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="product-card" style={cardStyle}>
      <img src={src} alt={name} onClick={openDetails}></img>
      <h3>{name}</h3>
      <h5>{specs}</h5>
      <p>Price: ₾{price}</p>
      {!visible && <p style={{ color: "red" }}>Not Available</p>}
      {visible && onSale && <p style={{ color: "green" }}>20% discount</p>}
      <button disabled={!visible} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      {showDetails && <ClickedOn product={product} onClose={closeDetails} />}
    </div>
  );
};

export default ProductCard;
