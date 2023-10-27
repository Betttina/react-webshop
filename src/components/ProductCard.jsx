// ProductCard-komponent

import React from "react";
import { AddToCartButton } from "../buttons/AddToCartButton";

export default function ProductCard({
  product,
  clickAddToCart,
  addToCart,
  cart,
  setCart,
}) {
  // att göra: Uppdatera lagersaldot vid genomfört köp
  // Hantera kundvagnslogik (antalet tillagda produkter till varukorgen)

  const handleAddToCart = () => {
    // skicka med produkten som argument
    clickAddToCart(product);
  };

  return (
    <div className="product-card" key={product.id}>
      <h2>{product.name}</h2>

      <img
        src={`http://localhost:3000/img/${product.bild}`}
        alt={product.name}
      />
      <p>Pris: {product.pris} kr</p>
      <p>Lagersaldo: {product.lagersaldo} st</p>

      <AddToCartButton
        inStock={product.lagersaldo > 0}
        clickAddToCart={() => clickAddToCart(product)} //skicka med produkterna
      />
    </div>
  );
}
