import books from "../data/books.js";



const movingBooks = () => {

  return `

    <section class="moving-books-section">

      <div class="moving-books-header">

        <h2>
          Trending This Week
        </h2>

      </div>



      <div class="slider-wrapper">

        <div class="slider-track" id="sliderTrack">

          ${createBooks()}

          ${createBooks()}

        </div>

      </div>

    </section>

  `;
};








const createBooks = () => {

  return books.map(
    (book) => {

      return `

        <div class="moving-book-card">

          <div class="moving-book-image">

            <img
              src="${book.image}"
              alt="${book.title}"
              loading="lazy"
            />

          </div>





          <div class="moving-book-content">

            <h3>

              ${book.title}

            </h3>



            <p>

              ${book.author}

            </p>



            <span class="book-price">

              ₹${book.price}

            </span>

          </div>

        </div>

      `;
    }
  ).join("");

};








export const initMovingBooks = () => {

  const sliderTrack =
    document.getElementById(
      "sliderTrack"
    );



  if (!sliderTrack) {
    return;
  }





  // =========================
  // PAUSE ON HOVER
  // =========================

  sliderTrack.addEventListener(
    "mouseenter",
    () => {

      sliderTrack.style.animationPlayState =
        "paused";

    }
  );



  sliderTrack.addEventListener(
    "mouseleave",
    () => {

      sliderTrack.style.animationPlayState =
        "running";

    }
  );

};





export default movingBooks;