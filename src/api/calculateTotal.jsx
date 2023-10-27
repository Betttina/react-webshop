// Funktion för att räkna ut totalsumman
function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    console.log(total, item);
    //const itemTotal = item.pris * item.quantity; // Om du har quantity i produktdata
    return total + item.pris;
  }, 0);
}

export default calculateTotal;
