import React from "react";


export function ProductsButton ({ /*setShowProductsPage,*/ onNavToProducts }) {

    /*const handleProductsButton = () => {
        console.log("Produkt-knappen är tryckt!");

        setShowProductsPage(true);


    };*/

return (
    <button className="products-btn" onClick={onNavToProducts}>
        Produkter
    </button>
);
}