import deals from "../data/deals.js";



const flashDeals = () => {

  return `

    <section class="flash-deals-section">

      <div class="flash-deals-container">

        <div class="flash-header">

          <div class="flash-header-left">

            <h2>
              Flash Deals
            </h2>

            <p>
              Limited-time offers on bestselling books
            </p>

          </div>





          <div class="flash-timer">

            <div class="timer-box">

              <h3 id="hours">
                00
              </h3>

              <span>
                Hours
              </span>

            </div>





            <div class="timer-box">

              <h3 id="minutes">
                00
              </h3>

              <span>
                Minutes
              </span>

            </div>





            <div class="timer-box">

              <h3 id="seconds">
                00
              </h3>

              <span>
                Seconds
              </span>

            </div>

          </div>

        </div>





        <div class="flash-deals-row">

          ${renderDeals()}

        </div>

      </div>

    </section>

  `;
};








const renderDeals = () => {

  return deals.map(
    (deal) => {

      return `

        <div class="flash-card">

          <div class="flash-image">

            <img
              src="${deal.image}"
              alt="${deal.title}"
              loading="lazy"
            />

          </div>





          <div class="flash-content">

            <span class="flash-tag">

              ${deal.discount}

            </span>



            <h3>

              ${deal.title}

            </h3>



            <p>

              ${deal.author}

            </p>





            <div class="flash-pricing">

              <span class="new-price">

                ₹${deal.newPrice}

              </span>



              <span class="old-price">

                ₹${deal.oldPrice}

              </span>

            </div>





            <button class="flash-btn">

              Grab Deal

            </button>

          </div>

        </div>

      `;
    }
  ).join("");

};








export const initFlashDeals = () => {

  const hours =
    document.getElementById("hours");

  const minutes =
    document.getElementById("minutes");

  const seconds =
    document.getElementById("seconds");



  if (
    !hours ||
    !minutes ||
    !seconds
  ) {
    return;
  }





  // =========================
  // DEAL TIMER
  // =========================

  let totalSeconds =
    6 * 60 * 60;





  const updateTimer = () => {

    const hrs =
      Math.floor(
        totalSeconds / 3600
      );



    const mins =
      Math.floor(
        (totalSeconds % 3600) / 60
      );



    const secs =
      totalSeconds % 60;





    hours.textContent =
      String(hrs).padStart(2, "0");



    minutes.textContent =
      String(mins).padStart(2, "0");



    seconds.textContent =
      String(secs).padStart(2, "0");





    if (totalSeconds > 0) {

      totalSeconds--;

    }

  };





  updateTimer();

  setInterval(updateTimer, 1000);

};





export default flashDeals;