import { addToCart } from "./cart.js";

const deserts = document.querySelector(".desserts");

export async function loadProducts() {
  const response = await fetch("../data.json");
  const data = await response.json();

  return data;
}

export function renderProducts(products) {
  products.forEach((product) => {
    const card = document.createElement("div");

    // IMG CONTAINER
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image");
    const img = document.createElement("img");
    img.src = product.image.thumbnail;

    imgContainer.appendChild(img);

    // DETAILS CONTAINER
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    const h5 = document.createElement("h5");
    const button = document.createElement("button");

    p.innerHTML = product.category;
    h3.innerHTML = product.name;
    h5.innerHTML = product.price;
    button.textContent = "Add to Cart";

    button.addEventListener("click", () => addToCart(product));

    detailsContainer.appendChild(p);
    detailsContainer.appendChild(h3);
    detailsContainer.appendChild(h5);
    detailsContainer.appendChild(button);

    card.classList.add("card");

    card.appendChild(imgContainer);
    card.appendChild(detailsContainer);
    deserts.appendChild(card);
  });
}
