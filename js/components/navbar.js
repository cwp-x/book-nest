const navbar = () => {
  return `
    <header class="navbar">

      <div class="logo">
        <h1>Book<span>Nest</span></h1>
      </div>

      <div class="search-box">
        <input
          type="text"
          placeholder="Search books, authors, genres..."
          id="searchInput"
        />
      </div>

      <div class="nav-actions">

        <button class="nav-btn reader-mode-btn" id="readerModeBtn">
          Reader Mode
        </button>

        <button class="nav-btn">
          Community
        </button>

        <button class="nav-btn cart-btn">
          Cart
        </button>

        <div class="profile">
          A
        </div>

        <button class="mobile-menu-btn" id="mobileMenuBtn">
          ☰
        </button>

      </div>


      <!-- MOBILE SIDEBAR -->

      <aside class="mobile-sidebar" id="mobileSidebar">

        <div class="mobile-sidebar-header">

          <h2>
            Book<span>Nest</span>
          </h2>

          <button id="closeSidebarBtn">
            ✕
          </button>

        </div>

        <nav class="mobile-sidebar-links">

          <a href="#">Home</a>
          <a href="#">Trending</a>
          <a href="#">Deals</a>
          <a href="#">Community</a>
          <a href="#">Wishlist</a>

        </nav>

      </aside>

      <div
        class="sidebar-overlay"
        id="sidebarOverlay"
      ></div>

    </header>
  `;
};




export const initNavbar = () => {

  const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

  const mobileSidebar =
    document.getElementById("mobileSidebar");

  const closeSidebarBtn =
    document.getElementById("closeSidebarBtn");

  const sidebarOverlay =
    document.getElementById("sidebarOverlay");

  const readerModeBtn =
    document.getElementById("readerModeBtn");

  const searchInput =
    document.getElementById("searchInput");



  // =========================
  // OPEN SIDEBAR
  // =========================

  const openSidebar = () => {

    mobileSidebar.classList.add("active");

    sidebarOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
  };



  // =========================
  // CLOSE SIDEBAR
  // =========================

  const closeSidebar = () => {

    mobileSidebar.classList.remove("active");

    sidebarOverlay.classList.remove("active");

    document.body.style.overflow = "";
  };



  // =========================
  // EVENT LISTENERS
  // =========================

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener(
      "click",
      openSidebar
    );
  }


  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener(
      "click",
      closeSidebar
    );
  }


  if (sidebarOverlay) {
    sidebarOverlay.addEventListener(
      "click",
      closeSidebar
    );
  }



  // =========================
  // ESC KEY CLOSE
  // =========================

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeSidebar();
      }

    }
  );



  // =========================
  // READER MODE
  // =========================

  if (readerModeBtn) {

    readerModeBtn.addEventListener(
      "click",
      () => {

        const currentMode =
          document.body.dataset.mode;


        if (currentMode === "reader") {

          document.body.dataset.mode =
            "default";

          readerModeBtn.textContent =
            "Reader Mode";

        }

        else {

          document.body.dataset.mode =
            "reader";

          readerModeBtn.textContent =
            "Normal Mode";
        }

      }
    );
  }



  // =========================
  // SEARCH INPUT UX
  // =========================

  if (searchInput) {

    searchInput.addEventListener(
      "focus",
      () => {

        searchInput.parentElement.classList.add(
          "focused"
        );

      }
    );


    searchInput.addEventListener(
      "blur",
      () => {

        searchInput.parentElement.classList.remove(
          "focused"
        );

      }
    );
  }

};



export default navbar;