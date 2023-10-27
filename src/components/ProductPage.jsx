// ProductPage-komponent
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/getdata";

export function ProductPage({
  products,

  setProducts,
  cart,
  setCart,
}) {
  /* const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulera en asynkron operation, t.ex. ett API-anrop
      setTimeout(() => {
        const data = "Här är ditt svar från API:n";
        resolve(data); // Löser promise med data
      }, 2000);
    });
  };
*/
  // Anropa fetchData och hantera resultatet med .then och .catc

  return (
    <div className="product-section">
      <div className="title-div">
        <h1 className="page-title">Produkter</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            clickAddToCart={(newItem) => setCart([...cart, newItem])}
          />
        ))}
      </div>
    </div>
  );
}
