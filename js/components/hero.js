const hero = () => {

  return `

    <section class="hero">

      <div class="hero-left">

        <p class="hero-tag">
          📚 Discover Your Next Favourite Book
        </p>


        <h1>
          Read Smarter,
          <span>
            Feel Deeper
          </span>
        </h1>


        <p class="hero-description">

          Explore trending books, emotional stories,
          late night reads, and powerful communities
          made for passionate readers.

        </p>


        <div class="hero-buttons">

          <button class="primary-btn">

            Start Reading

          </button>


          <button class="secondary-btn">

            Explore Community

          </button>

        </div>


        <div class="hero-stats">

          <div class="hero-stat">

            <h3>
              50K+
            </h3>

            <p>
              Active Readers
            </p>

          </div>


          <div class="hero-stat">

            <h3>
              12K+
            </h3>

            <p>
              Books Available
            </p>

          </div>


          <div class="hero-stat">

            <h3>
              4.9★
            </h3>

            <p>
              Reader Rating
            </p>

          </div>

        </div>

      </div>



      <div class="hero-right">

        <div class="hero-image-container">

          <img
            src="./assets/images/books/hero-book.png"
            alt="Hero Book"
            class="hero-image"
          />

        </div>

      </div>

    </section>

  `;
};





export const initHero = () => {

  const primaryBtn =
    document.querySelector(".primary-btn");


  const secondaryBtn =
    document.querySelector(".secondary-btn");



  // =========================
  // PRIMARY BUTTON
  // =========================

  if (primaryBtn) {

    primaryBtn.addEventListener(
      "click",
      () => {

        const trendingSection =
          document.getElementById(
            "trending-books"
          );


        if (trendingSection) {

          trendingSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );
  }



  // =========================
  // SECONDARY BUTTON
  // =========================

  if (secondaryBtn) {

    secondaryBtn.addEventListener(
      "click",
      () => {

        const communitySection =
          document.getElementById(
            "community"
          );


        if (communitySection) {

          communitySection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );
  }

};



export default hero;