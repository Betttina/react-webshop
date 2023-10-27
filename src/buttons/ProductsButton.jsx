import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";

export function ProductsButton({ /*setShowProductsPage,*/ onNavToProducts }) {
  /*const handleProductsButton = () => {
        console.log("Produkt-knappen är tryckt!");

        setShowProductsPage(true);


    };*/

  return (
    <button className="products-btn" onClick={onNavToProducts}>
      <h2>Produkter</h2>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </button>
  );
}
