import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./css/normalize.css";
import { Navbar } from "./components/Navbar";
import {ProductPage } from "./components/ProductPage";
import {CartPage} from "./components/CartPage";
import { fetchProducts } from "./api/getdata"; // Importera fetchProducts


export default function App() {
    const [ currentPage, setCurrentPage ] = useState("product");
    const [ basket, setBasket ] = useState([]); // Kundvagn-state. basket är en array som innehåller produkterna som har lagts till av user. nya element kan läggas till.
    const [ products, setProducts ] = useState([]) // tillståndsvariabel för produkter
    const [cart, setCart ] = useState([])

    const NavToProducts = () => {
            setCurrentPage("product");
        };

    const NavToCartPage = () => {
        setCurrentPage("cart");
    }

    const addToCart = (product) => {
        if (product.lagersaldo > 0) {
            const updatedCart = [...basket, product];
            /*const itemInCart = updatedCart.find((item) => item.id === product.id);*/

            setBasket(updatedCart);
        }
    }

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await fetchProducts();
                    setProducts(data);
                } catch (error) {
                    console.error("Error fetching product-data:", error);
                }
            };

            fetchData(); // calling fetchData inuti useEffect
        }, []); // kör useEffect 1 gång, empty dependent array

    useEffect(() => {
        console.log("Komponenten har monterats.");
        // Din kod här
    }, []);

    const handleClick = () => {
        console.log("Knappen har klickats på.");
        // Din kod här
    };


    return (
        <div className="App">

            <Navbar onNavToProducts={NavToProducts} onNavToCart={NavToCartPage} />
            <div className="div-body">


            {currentPage === "product" ? (
                <ProductPage basket={basket} products={products} addToCart={addToCart} cart={cart} setCart={setCart}/>
            ) : (
                <CartPage basket={basket} cart={cart} setCart={setCart}/>
            )}

                <div className="hero-section"></div>
            </div>
        </div>
    );
}