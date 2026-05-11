import books from "../data/books.js";

import debounce from "../utils/debounce.js";






const createSearchModal = () => {

  return `

    <div
      class="modal-overlay"
      id="searchModal"
    >

      <div class="modal search-modal">

        <button
          class="close-modal"
          id="closeSearchModal"
        >

          ✕

        </button>





        <h2>
          Search Books
        </h2>





        <input
          type="text"
          placeholder="Search books..."
          class="search-modal-input"
          id="searchModalInput"
        />





        <div
          class="search-results"
          id="searchResults"
        >

        </div>

      </div>

    </div>

  `;
};








const renderSearchResults = (
  results
) => {

  const resultsContainer =
    document.getElementById(
      "searchResults"
    );






  if (!resultsContainer) {
    return;
  }






  if (!results.length) {

    resultsContainer.innerHTML = `

      <p class="empty-search">

        No books found.

      </p>

    `;






    return;
  }






  resultsContainer.innerHTML =
    results.map(
      (book) => {

        return `

          <div class="search-result-card">

            <img
              src="${book.image}"
              alt="${book.title}"
            />





            <div>

              <h3>

                ${book.title}

              </h3>



              <p>

                ${book.author}

              </p>

            </div>

          </div>

        `;
      }
    ).join("");

};








const handleSearch = (
  value
) => {

  const query =
    value.toLowerCase().trim();






  const filteredBooks =
    books.filter(
      (book) => {

        return (

          book.title
            .toLowerCase()
            .includes(query)

          ||

          book.author
            .toLowerCase()
            .includes(query)

        );

      }
    );






  renderSearchResults(
    filteredBooks
  );

};








const debouncedSearch =
  debounce(
    handleSearch,
    300
  );








const openSearchModal = () => {

  const modal =
    document.getElementById(
      "searchModal"
    );






  if (!modal) {
    return;
  }






  modal.classList.add(
    "active"
  );






  document.body.style.overflow =
    "hidden";






  const input =
    document.getElementById(
      "searchModalInput"
    );






  if (input) {

    input.focus();

  }

};








const closeSearchModal = () => {

  const modal =
    document.getElementById(
      "searchModal"
    );






  if (!modal) {
    return;
  }






  modal.classList.remove(
    "active"
  );






  document.body.style.overflow =
    "";

};








export const initSearchModal = () => {

  document.body.insertAdjacentHTML(
    "beforeend",
    createSearchModal()
  );






  const searchInput =
    document.getElementById(
      "searchInput"
    );



  const modalInput =
    document.getElementById(
      "searchModalInput"
    );



  const closeButton =
    document.getElementById(
      "closeSearchModal"
    );



  const modal =
    document.getElementById(
      "searchModal"
    );






  if (searchInput) {

    searchInput.addEventListener(
      "focus",
      openSearchModal
    );

  }






  if (modalInput) {

    modalInput.addEventListener(
      "input",
      (event) => {

        debouncedSearch(
          event.target.value
        );

      }
    );

  }






  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeSearchModal
    );

  }






  if (modal) {

    modal.addEventListener(
      "click",
      (event) => {

        if (
          event.target === modal
        ) {

          closeSearchModal();

        }

      }
    );

  }






  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeSearchModal();

      }

    }
  );

};





export default initSearchModal;