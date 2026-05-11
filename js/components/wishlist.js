import {
  getWishlist,
  saveWishlist
} from "../utils/storage.js";






let wishlist =
  getWishlist();






const updateWishlistButtons = () => {

  const wishlistButtons =
    document.querySelectorAll(
      ".wishlist-btn"
    );



  wishlistButtons.forEach(
    (button) => {

      const bookId =
        Number(
          button.dataset.bookId
        );



      const isWishlisted =
        wishlist.includes(
          bookId
        );



      if (isWishlisted) {

        button.classList.add(
          "active"
        );

      }

      else {

        button.classList.remove(
          "active"
        );

      }

    }
  );

};






const toggleWishlist = (
  bookId
) => {

  const exists =
    wishlist.includes(
      bookId
    );



  if (exists) {

    wishlist =
      wishlist.filter(
        (id) => id !== bookId
      );

  }

  else {

    wishlist.push(bookId);

  }



  saveWishlist(
    wishlist
  );



  updateWishlistButtons();

};






export const initWishlist = () => {

  updateWishlistButtons();





  document.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          ".wishlist-btn"
        );



      if (!button) {
        return;
      }



      const bookId =
        Number(
          button.dataset.bookId
        );



      toggleWishlist(
        bookId
      );

    }
  );

};





export default initWishlist;