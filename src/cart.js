const appear = document.querySelector(".appear");
const h3 = document.querySelector("h3");

export const CART = [];

export function addToCart(product) {
  CART.push(product);
  renderCart(CART);
}

export function removeFromCart() {
  console.log("remove from cart");
}

function renderCart(CART) {
  h3.innerHTML = `Your Cart (${CART.length})`;

  appear.innerHTML = "";

  CART.forEach((item) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.innerHTML = item.price;
    p.classList.add("cart-price");
    img.src = item.image.thumbnail;

    h4.innerHTML = item.name;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(img);

    appear.appendChild(div);
  });
}
