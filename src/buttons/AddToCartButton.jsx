// Add to cart-button

import React from "react";
import Button from "react-bootstrap/Button";

export function AddToCartButton({ inStock, clickAddToCart, selectedProduct }) {
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


