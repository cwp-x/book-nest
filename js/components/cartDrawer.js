import books from "../data/books.js";

import {
  getCart,
  saveCart
} from "../utils/storage.js";

import {
  showToast
} from "./toast.js";






let cart =
  getCart();






const createCartDrawer = () => {

  return `

    <div
      class="cart-drawer"
      id="cartDrawer"
    >

      <div class="cart-header">

        <h2>
          Your Cart
        </h2>



        <button
          class="close-modal"
          id="closeCartDrawer"
        >

          ✕

        </button>

      </div>





      <div
        class="cart-items"
        id="cartItems"
      >

      </div>

    </div>





    <div
      class="sidebar-overlay"
      id="cartOverlay"
    ></div>

  `;
};








const renderCartItems = () => {

  const cartItems =
    document.getElementById(
      "cartItems"
    );






  if (!cartItems) {
    return;
  }






  if (!cart.length) {

    cartItems.innerHTML = `

      <p class="empty-cart">

        Your cart is empty.

      </p>

    `;






    return;
  }






  const cartBooks =
    books.filter(
      (book) => {

        return cart.includes(
          book.id
        );

      }
    );






  cartItems.innerHTML =
    cartBooks.map(
      (book) => {

        return `

          <div class="cart-item">

            <img
              src="${book.image}"
              alt="${book.title}"
            />





            <div class="cart-item-info">

              <h3>

                ${book.title}

              </h3>



              <p>

                ${book.author}

              </p>



              <span>

                ₹${book.price}

              </span>

            </div>





            <button
              class="remove-cart-item"
              data-book-id="${book.id}"
            >

              ✕

            </button>

          </div>

        `;
      }
    ).join("");

};








const openCartDrawer = () => {

  const drawer =
    document.getElementById(
      "cartDrawer"
    );



  const overlay =
    document.getElementById(
      "cartOverlay"
    );






  if (!drawer || !overlay) {
    return;
  }






  drawer.classList.add(
    "active"
  );






  overlay.classList.add(
    "active"
  );






  document.body.style.overflow =
    "hidden";

};








const closeCartDrawer = () => {

  const drawer =
    document.getElementById(
      "cartDrawer"
    );



  const overlay =
    document.getElementById(
      "cartOverlay"
    );






  if (!drawer || !overlay) {
    return;
  }






  drawer.classList.remove(
    "active"
  );






  overlay.classList.remove(
    "active"
  );






  document.body.style.overflow =
    "";

};








const addToCart = (
  bookId
) => {

  const exists =
    cart.includes(bookId);






  if (exists) {

    showToast(
      "Book already in cart",
      "warning"
    );






    return;
  }






  cart.push(bookId);






  saveCart(cart);






  renderCartItems();






  showToast(
    "Book added to cart",
    "success"
  );

};








const removeFromCart = (
  bookId
) => {

  cart =
    cart.filter(
      (id) => id !== bookId
    );






  saveCart(cart);






  renderCartItems();






  showToast(
    "Book removed from cart",
    "info"
  );

};








export const initCartDrawer = () => {

  document.body.insertAdjacentHTML(
    "beforeend",
    createCartDrawer()
  );






  renderCartItems();






  const cartButton =
    document.querySelector(
      ".cart-btn"
    );



  const closeButton =
    document.getElementById(
      "closeCartDrawer"
    );



  const overlay =
    document.getElementById(
      "cartOverlay"
    );






  if (cartButton) {

    cartButton.addEventListener(
      "click",
      openCartDrawer
    );

  }






  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeCartDrawer
    );

  }






  if (overlay) {

    overlay.addEventListener(
      "click",
      closeCartDrawer
    );

  }






  document.addEventListener(
    "click",
    (event) => {

      const addButton =
        event.target.closest(
          ".add-cart-btn"
        );






      if (addButton) {

        const bookId =
          Number(
            addButton.dataset.bookId
          );






        addToCart(
          bookId
        );

      }






      const removeButton =
        event.target.closest(
          ".remove-cart-item"
        );






      if (removeButton) {

        const bookId =
          Number(
            removeButton.dataset.bookId
          );






        removeFromCart(
          bookId
        );

      }

    }
  );






  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeCartDrawer();

      }

    }
  );

};





export default initCartDrawer;