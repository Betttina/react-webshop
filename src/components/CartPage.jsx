// Kundvagnssidan.
// User kan se vad som har lagts till. Genomföra köp.
// meddela användaren om köpet är framgångsrikt, tömma kundvagnen och navigera till bekräftelsesidan.

import React, { useState } from "react";

export function CartPage({ setShowProductsPage, cart, setCart }) {
  const handleProductButton = () => {
    setShowProductsPage(true);
  };

  return (
    <div>
      <h1 className="page-title">Varukorgen</h1>

      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <table className="cart-tabell">
          <tr>
            <th> Produktnamn </th>
            <th> Pris </th>
            <th> Summa </th>
          </tr>

          {cart.map((item, index) => (
            <tr key={index}>
              <td> {item.name} </td>
              <td> {item.pris} </td>
              {/* <td> {item.summa} </td>*/}
            </tr>
          ))}
        </table>
      )}

      <div></div>
    </div>
  );
}
