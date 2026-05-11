import quotes from "../data/quotes.js";



const quoteSection = () => {

  return `

    <section class="quote-section">

      <div class="quote-container">

        ${renderQuote()}

      </div>

    </section>

  `;
};








const renderQuote = () => {

  const randomQuote =
    quotes[
      Math.floor(
        Math.random() *
        quotes.length
      )
    ];






  return `

    <div class="quote-card">

      <span class="quote-icon">

        ❝

      </span>





      <p class="quote-text">

        ${randomQuote.text}

      </p>





      <h3 class="quote-author">

        — ${randomQuote.author}

      </h3>

    </div>

  `;

};








export const initQuoteSection = () => {

  const quoteCard =
    document.querySelector(
      ".quote-card"
    );






  if (!quoteCard) {
    return;
  }






  quoteCard.addEventListener(
    "mouseenter",
    () => {

      quoteCard.classList.add(
        "active"
      );

    }
  );






  quoteCard.addEventListener(
    "mouseleave",
    () => {

      quoteCard.classList.remove(
        "active"
      );

    }
  );

};





export default quoteSection;