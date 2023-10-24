// Uppdatera URL till din backend
const apiUrl = "http://localhost:3000/api/products";

export async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      console.log(response);
      return await response.json();
    } else {
      throw new Error("Något gick fel vid hämtning av produkter");
    }
  } catch (error) {
    throw new Error(`Fel vid hämtning av produkter: ${error.message}`);
  }
}
