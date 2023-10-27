import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./css/normalize.css";
import { Navbar } from "./components/Navbar";
import { ProductPage } from "./components/ProductPage";
import { CartPage } from "./components/CartPage";
import { fetchProducts } from "./api/getdata"; // Importera fetchProducts

export default function App() {
  const [currentPage, setCurrentPage] = useState("product");
  const [products, setProducts] = useState([]); // tillståndsvariabel för produkter
  const [cart, setCart] = useState([]); // Kundvagn-state. basket är en array som innehåller produkterna som har lagts till av user. nya element kan läggas till.

  const NavToProducts = () => {
    setCurrentPage("product");
  };

  const NavToCartPage = () => {
    setCurrentPage("cart");
  };

  const NavToConfirm = () => {
    setCurrentPage("confirm");
  };

  /*const handleShowCart = () => {
    setCurrentPage(true);
  };*/

  /* spara i närminnet */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log("fetched data", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product-data:", error);
      }
    };
    fetchData(); // calling fetchData inuti useEffect
  }, []); // beroende -> kör useEffect när setProd ändras

  //------------------ when user adds products to cart
  const addToCart = (product) => {
    if (product.lagersaldo > 0) {
      const updatedCart = [...cart];
      const index = updatedCart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        // Om produkten redan finns i varukorgen, öka antalet
        updatedCart[index].quantity += 1;
      } else {
        // Om produkten inte finns i varukorgen, lägg till den
        updatedCart.push({ ...product, quantity: 1 });
      }

      // Minska lagersaldot för produkten
      product.lagersaldo -= 1;

      setCart(updatedCart);
      console.log(product.lagersaldo);
    }
  };

  /* ----------Genomför köp ------*/
  const handleCheckout = async () => {
    try {
      // information om de produkter som har köpts skickas till backend (put-req)
      const response = await fetch("/api/checkout", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart), // Skicka varukorgen som JSON till backend
      });

      if (response.ok) {
        /* Köpet lyckades, visa meddelandet "Tack för ditt köp!"
        Navigera till ConfirmPage.jsx
        Uppdatera lagersaldot i frontend och backend  */
      } else {
        // om köpet misslyckades visa meddelande
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      // hantering av fel som kan uppstå vid köp
    }

    // Töm varukorgen efter att köpet är genomfört
    setCart([]);
  };

  return (
    <div className="App">
      <Navbar
        onNavToProducts={NavToProducts}
        onNavToCart={NavToCartPage}
        cart={cart}
      />
      <div className="div-body">
        {currentPage === "product" ? (
          <ProductPage
            products={products}
            clickAddToCart={addToCart}
            cart={cart}
            setCart={setCart}
          />
        ) : (
          <CartPage setCart={setCart} cart={cart} basket={basket} />
        )}
        <div className="hero-section"></div>
      </div>
    </div>
  );
}
