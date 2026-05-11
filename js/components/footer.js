const footer = () => {

  return `

    <footer class="footer">

      <div class="footer-container">

        <div class="footer-top">



          <!-- LOGO -->

          <div class="footer-logo">

            <h2>
              Book<span>Nest</span>
            </h2>


            <p>

              A modern reading platform built for
              passionate readers, emotional stories,
              and meaningful communities.

            </p>

          </div>




          <!-- QUICK LINKS -->

          <div class="footer-links">

            <h3>
              Quick Links
            </h3>


            <ul>

              <li>
                <a href="#">
                  Home
                </a>
              </li>


              <li>
                <a href="#">
                  Trending
                </a>
              </li>


              <li>
                <a href="#">
                  Deals
                </a>
              </li>


              <li>
                <a href="#">
                  Community
                </a>
              </li>

            </ul>

          </div>




          <!-- CATEGORIES -->

          <div class="footer-links">

            <h3>
              Categories
            </h3>


            <ul>

              <li>
                <a href="#">
                  Self Growth
                </a>
              </li>


              <li>
                <a href="#">
                  Finance
                </a>
              </li>


              <li>
                <a href="#">
                  Fiction
                </a>
              </li>


              <li>
                <a href="#">
                  Motivation
                </a>
              </li>

            </ul>

          </div>




          <!-- NEWSLETTER -->

          <div class="footer-newsletter">

            <h3>
              Stay Updated
            </h3>


            <p>

              Get weekly reading recommendations,
              emotional picks, and trending books.

            </p>



            <form class="footer-form">

              <input
                type="email"
                placeholder="Enter your email"
                required
              />


              <button type="submit">

                Subscribe

              </button>

            </form>

          </div>

        </div>




        <!-- FOOTER BOTTOM -->

        <div class="footer-bottom">

          <p>

            © 2026 BookNest.
            All rights reserved.

          </p>



          <div class="footer-socials">

            <a href="#">

              📘

            </a>


            <a href="#">

              📸

            </a>


            <a href="#">

              🐦

            </a>


            <a href="#">

              ▶️

            </a>

          </div>

        </div>

      </div>

    </footer>

  `;
};








export const initFooter = () => {

  const footerForm =
    document.querySelector(
      ".footer-form"
    );



  if (!footerForm) {
    return;
  }



  // =========================
  // NEWSLETTER FORM
  // =========================

  footerForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();



      const input =
        footerForm.querySelector(
          "input"
        );



      if (!input.value.trim()) {
        return;
      }



      const button =
        footerForm.querySelector(
          "button"
        );



      button.textContent =
        "Subscribed ✓";



      input.value = "";



      setTimeout(() => {

        button.textContent =
          "Subscribe";

      }, 2000);

    }
  );

};





export default footer;