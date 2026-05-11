import books from "../data/books.js";



const trendingBooks = () => {

  return `

    <section class="trending-section">

      <div class="section-header">

        <h2>
          Popular Books
        </h2>


        <button class="view-all-btn">

          View All

        </button>

      </div>



      <div class="trending-books-grid">

        ${renderBooks()}

      </div>

    </section>

  `;
};







const renderBooks = () => {

  return books.map(
    (book) => {

      return `

        <article class="book-card">

          <div class="book-card-image">

            <img
              src="${book.image}"
              alt="${book.title}"
              loading="lazy"
            />


            <span class="book-badge">

              ${book.badge}

            </span>


            <button
              class="wishlist-btn"
              data-book-id="${book.id}"
            >

              ♥️

            </button>

          </div>





          <div class="book-card-content">

            <h3 class="book-title">

              ${book.title}

            </h3>



            <p class="book-author">

              ${book.author}

            </p>



            <div class="book-rating">

              ⭐ ${book.rating}

            </div>





            <div class="book-footer">

              <span class="book-price">

                ₹${book.price}

              </span>



              <button
                class="add-cart-btn"
                data-book-id="${book.id}"
              >

                +

              </button>

            </div>

          </div>

        </article>

      `;
    }
  ).join("");

};








export const initTrendingBooks = () => {

  const wishlistButtons =
    document.querySelectorAll(
      ".wishlist-btn"
    );



  const cartButtons =
    document.querySelectorAll(
      ".add-cart-btn"
    );





  // =========================
  // WISHLIST BUTTONS
  // =========================

  wishlistButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          button.classList.toggle(
            "active"
          );

        }
      );

    }
  );





  // =========================
  // CART BUTTONS
  // =========================

  cartButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          button.textContent = "✓";



          setTimeout(() => {

            button.textContent = "+";

          }, 1200);

        }
      );

    }
  );

};





export default trendingBooks;