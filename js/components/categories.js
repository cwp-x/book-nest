import categories from "../data/categories.js";



const categoriesSection = () => {

  return `

    <section class="categories-section">

      <div class="section-header">

        <h2>
          Browse Categories
        </h2>


        <p>
          Explore books based on your mood,
          goals, and reading interests.
        </p>

      </div>





      <div class="categories-grid">

        ${renderCategories()}

      </div>

    </section>

  `;
};








const renderCategories = () => {

  return categories.map(
    (category) => {

      return `

        <article
          class="category-card"
          style="
            background:
            ${category.color};
          "
        >

          <div class="category-icon">

            ${category.icon}

          </div>





          <h3>

            ${category.name}

          </h3>

        </article>

      `;
    }
  ).join("");

};








export const initCategories = () => {

  const categoryCards =
    document.querySelectorAll(
      ".category-card"
    );






  categoryCards.forEach(
    (card) => {

      card.addEventListener(
        "mouseenter",
        () => {

          card.classList.add(
            "active"
          );

        }
      );






      card.addEventListener(
        "mouseleave",
        () => {

          card.classList.remove(
            "active"
          );

        }
      );

    }
  );

};





export default categoriesSection;