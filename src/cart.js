export const CART = [];

export function addToCart(product) {
  CART.push(product);
  renderCart(CART);
}

export function removeFromCart() {
  console.log("remove from cart");
}

function renderCart(CART) {
  console.log({ CART });
}
