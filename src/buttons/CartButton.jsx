// Cart-button in navbar. Knappen för "Varukorg"
// Navigerar användaren till CartPage-komponent

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function CartButton({ onNavToCart, cart }) {
  return (
    <button className="cart-btn" onClick={onNavToCart}>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </div>
      <h2>Varukorgen</h2>
      {cart && (
        <span className="cart-count">
          <h6>Antal produkter tillagda: {JSON.stringify(cart.length)}</h6>
        </span>
      )}
    </button>
  );
}
