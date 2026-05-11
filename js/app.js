import navbar from "./components/navbar.js";

import hero from "./components/hero.js";

import movingBooks from "./components/movingBooks.js";

import trendingBooks from "./components/trendingBooks.js";

import flashDeals from "./components/flashDeals.js";

import community from "./components/community.js";

import footer from "./components/footer.js";

import categoriesSection from "./components/categories.js";

import testimonialsSection from "./components/testimonials.js";

import quoteSection from "./components/quoteSection.js";



import {
  initTrendingBooks
} from "./components/trendingBooks.js";

import {
  initMovingBooks
} from "./components/movingBooks.js";

import {
  initFlashDeals
} from "./components/flashDeals.js";

import {
  initCommunity
} from "./components/community.js";

import {
  initCategories
} from "./components/categories.js";

import {
  initTestimonials
} from "./components/testimonials.js";

import {
  initQuoteSection
} from "./components/quoteSection.js";



import initWishlist from "./components/wishlist.js";

import initMobileMenu from "./components/mobileMenu.js";

import initReaderMode from "./components/readerMode.js";

import initLoadingScreen from "./components/loadingScreen.js";

import initInfiniteSlider from "./components/infiniteSlider.js";

import initHeroSlider from "./components/heroSlider.js";

import initSearchModal from "./components/searchModal.js";

import initToast from "./components/toast.js";

import initCartDrawer from "./components/cartDrawer.js";



import {
  initRevealAnimations
} from "./utils/animations.js";






// =========================
// WAIT FOR DOM
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const app =
      document.getElementById(
        "app"
      );






    if (!app) {

      console.error(
        "#app not found"
      );

      return;
    }






    // =========================
    // RENDER APP
    // =========================

    app.innerHTML = `

      ${navbar()}

      <main>

        ${hero()}

        ${movingBooks()}

        ${trendingBooks()}

        ${flashDeals()}

        ${categoriesSection()}

        ${quoteSection()}

        ${community()}

        ${testimonialsSection()}

      </main>

      ${footer()}

    `;






    // =========================
    // INIT COMPONENTS
    // =========================

    initTrendingBooks();

    initMovingBooks();

    initFlashDeals();

    initCommunity();

    initCategories();

    initTestimonials();

    initQuoteSection();






    // =========================
    // FEATURES
    // =========================

    initWishlist();

    initMobileMenu();

    initReaderMode();

    initLoadingScreen();

    initInfiniteSlider();

    initHeroSlider();

    initSearchModal();

    initToast();

    initCartDrawer();






    // =========================
    // ANIMATIONS
    // =========================

    initRevealAnimations();

  }
);
