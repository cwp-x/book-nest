import testimonials from "../data/testimonials.js";



const testimonialsSection = () => {

  return `

    <section class="testimonials-section">

      <div class="section-header">

        <h2>
          What Readers Say
        </h2>


        <p>
          Real experiences from passionate readers
          around the BookNest community.
        </p>

      </div>





      <div class="testimonials-grid">

        ${renderTestimonials()}

      </div>

    </section>

  `;
};








const renderTestimonials = () => {

  return testimonials.map(
    (testimonial) => {

      return `

        <article class="testimonial-card">

          <div class="testimonial-user">

            <div class="testimonial-avatar">

              <img
                src="${testimonial.image}"
                alt="${testimonial.name}"
                loading="lazy"
              />

            </div>





            <div class="testimonial-user-info">

              <h3>

                ${testimonial.name}

              </h3>



              <span>

                ${testimonial.role}

              </span>

            </div>

          </div>





          <div class="testimonial-rating">

            ⭐ ${testimonial.rating}

          </div>





          <p class="testimonial-review">

            "${testimonial.review}"

          </p>

        </article>

      `;
    }
  ).join("");

};








export const initTestimonials = () => {

  const testimonialCards =
    document.querySelectorAll(
      ".testimonial-card"
    );






  testimonialCards.forEach(
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





export default testimonialsSection;