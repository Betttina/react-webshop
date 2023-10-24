import React from "react";

export function CartButton({ setShowCart, onNavToCart }) {
    console.log(typeof setShowCart)

    const handleShowCart = () => {
        console.log("Varukorgsknappen är klickad");
        setShowCart(true);

    };
    return (
        <button className="cart-btn" onClick={onNavToCart}>
            Varukorgen
        </button>
    );
}

