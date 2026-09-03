const cartItems = {};

const buyButtons = document.querySelectorAll(".buy-button");
const cart = document.querySelector("#cart");
const showCartButton = document.querySelector("#show-cart");
const closeCartButton = document.querySelector("#close-cart");
const cartItemsContainer = document.querySelector("#cart-items");

buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.dataset.name;

    const productCard = button.closest(".product-card");
    const quantityInput = productCard.querySelector(".quantity");
    const quantity = Number(quantityInput.value);

    if (cartItems[productName]) {
      cartItems[productName] += quantity;
    } else {
      cartItems[productName] = quantity;
    }

    alert("Product added to cart: " + productName);

    updateCart();
  });
});

showCartButton.addEventListener("click", function () {
  cart.hidden = false;
  updateCart();
});

closeCartButton.addEventListener("click", function () {
  cart.hidden = true;
});

function updateCart() {
  cartItemsContainer.textContent = "";

  for (const productName in cartItems) {
    const item = document.createElement("p");

    item.textContent = productName + " - Quantity: " + cartItems[productName];

    cartItemsContainer.appendChild(item);
  }
}
