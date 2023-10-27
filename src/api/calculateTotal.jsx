// Funktion för att räkna ut totalsumman
function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    const itemTotal = item.pris * item.quantity; // Om du har quantity i produktdata
    return total + itemTotal;
  }, 0);
}

export default calculateTotal;
