// Add to cart-button, Alltså "Lägg till varukorgen"-knappen i ProductCard-komponenten.

import React from "react";
import Button from "react-bootstrap/Button";

export function AddToCartButton({ inStock, selectedProduct, clickAddToCart }) {
  const buttonClassName = inStock ? "active-button" : "inactive-button";

  return (
    <Button
      className={buttonClassName}
      variant="primary"
      onClick={inStock ? () => clickAddToCart(selectedProduct) : null}
      disabled={!inStock}
    >
      Lägg till varukorg
    </Button>
  );
}
