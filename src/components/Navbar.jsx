import React, {useState} from "react";
import logo from "../img/logo-trans.png";
import "../css/App.css";
import {CartButton} from "../buttons/CartButton";
import { ProductsButton } from "../buttons/ProductsButton";

export function Navbar({ onNavToProducts, onNavToCart}) {

    return (
    <div className="navbar-section">

      <div className="nav-body">
        <img src={logo} className="Logo" alt="logo" />

        <div className="Buttons">
            <ProductsButton onNavToProducts={onNavToProducts} />
            <CartButton onNavToCart={onNavToCart} /> {/*tar emot funktion som en prop*/}
        </div>

      </div>

    </div>
  );
}


