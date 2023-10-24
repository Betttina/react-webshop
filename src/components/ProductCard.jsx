// ProductCard-komponent

import React from 'react'
import { AddToCartButton }  from "../buttons/AddToCartButton";

export default  function ProductCard({ product, clickAddToCart }) {

        const handleAddToCart = () => {
                // Kalla på clickAddToCart-funktionen och skicka med produkten som argument
                clickAddToCart(product);
        };

       // Uppdatera lagersaldot
        // Hantera kundvagnslogik (räkna antalet produkter i varukorgen, etc.)


        return (
            <div className="product-card" key={product.id}>
                <h2>{product.name}</h2>

                <img src={`http://localhost:3000/img/${product.bild}`} alt={product.name}/>
                <p>Pris: {product.pris} kr</p>
                <p>Lagersaldo: {product.lagersaldo} st</p>

                    <AddToCartButton
                        inStock={product.lagersaldo > 0}
                        clickAddToCart={handleAddToCart}
                    />


            </div>
        );

}
