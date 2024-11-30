import React, { useState } from "react";
import "../App.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.onSale ? item.price * 0.8 : item.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const handleCartClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-header" onClick={handleCartClick}>
        <span className="cart-icon">🛒</span>
        <span className="cart-name">Cart</span>
      </div>
      {isOpen && (
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ol>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₾{item.onSale ? item.price * 0.8 : item.price} x{" "}
                  {item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ol>
          )}
          <div className="cart-total">
            <h3>Total: ₾{calculateTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
