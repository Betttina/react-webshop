// ProductPage-komponent
import React, {useEffect, useState} from "react";
import  ProductCard  from "./ProductCard";
import { fetchProducts } from "../api/getdata";

export function ProductPage({ products, clickAddToCart, setProducts, cart, setCart }) {

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            // Simulera en asynkron operation, t.ex. ett API-anrop
            setTimeout(() => {
                const data = "Här är ditt svar från API:n";
                resolve(data); // Löser promise med data
            }, 2000);
        });
    };

// Anropa fetchData och hantera resultatet med .then och .catch
    fetchData()
        .then((result) => {
            console.log("Lyckades:", result);
        })
        .catch((error) => {
            console.error("Misslyckades:", error);
        });


    /*useEffect(() => {
        const fetchData = async () => {
            try {
                // GET/hämta produktdata
                const data = await fetchProducts(); // API-anrop

                setProducts(data);

                // console.log för att logga produktdata
                console.log("Hämtad produktdata:", data);
            } catch (error) {
                console.error("Error fetching product-data:", error);
            }
        };

        fetchData(); // Anropa fetchData här inuti useEffect
    }, []);
*/

    return (
        <div className="product-section">
            <div className="page-title">
                <h1 className="page-title">Produkter</h1>
                {JSON.stringify(cart)}
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        clickAddToCart={newItem => setCart([...cart, newItem])}
                    />
                ))}
            </div>
        </div>
    );
}
