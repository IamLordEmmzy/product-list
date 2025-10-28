import { loadProducts, renderProducts } from "./product.js";

async function init() {
  console.log("Initializing app");
  const products = await loadProducts();
  renderProducts(products);
}

init();
