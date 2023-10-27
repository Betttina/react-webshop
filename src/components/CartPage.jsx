// Kundvagnssidan.
// User kan se vad som har lagts till. Genomföra köp.
// Meddela användaren om köpet är framgångsrikt, tömma kundvagnen och navigera till bekräftelsesidan.

import React from "react";
import calculateTotal from "../api/calculateTotal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function CartPage({
  setShowProductsPage,
  cart,
  setCart,
  handleCheckout,
}) {
  const handleProductButton = () => {
    setShowProductsPage(true);
  };

  // Empty cart (tillfällig kundkorg). Sätter cart till [] (tom array)
  const handleEmptyCart = () => {
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h1 className="page-title">
        <FontAwesomeIcon icon={faShoppingCart} /> Kundkorgen
      </h1>

      <h4> {cart.length} produkter har lagts till i varukorgen. </h4>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <table className="cart-tabell">
          <thead>
            <tr>
              <th scope="col"> Produktnamn </th>
              <th scope="col"> Pris </th>
              <th scope="col"> Antal </th>
              <th scope="col"> Total </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td> {item.name} </td>
                <td> {item.pris} </td>
                <td> {item.quantity} </td>
                <td>{item.pris * item.quantity} kr</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="total-price">
              <td className="light">Summa:</td>
              <td colSpan="3">{calculateTotal(cart)} kr</td>
            </tr>
          </tfoot>
        </table>
      )}
      <div className="cart-buttons">
        <div>
          <section id="buy-button" className="container mt-10">
            <div className="row">
              <div className="col-md-4">
                <button
                  onClick={handleCheckout}
                  id="buyBtn"
                  className="btn btn-success w-100 bg-gradient"
                >
                  > Genomför köp
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="cart-actions">
          <button
            onClick={handleEmptyCart}
            id="emptyCartBtn"
            className="btn btn-outline-danger"
          >
            Töm varukorgen
          </button>
          <div className="cart-total">
            <p>Totalt: {calculateTotal(cart)} kr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
