import navbar, {
  initNavbar
} from "./components/navbar.js";

import hero, {
  initHero
} from "./components/hero.js";

import movingBooks, {
  initMovingBooks
} from "./components/movingBooks.js";

import trendingBooks, {
  initTrendingBooks
} from "./components/trendingBooks.js";

import flashDeals, {
  initFlashDeals
} from "./components/flashDeals.js";

import community, {
  initCommunity
} from "./components/community.js";

import footer, {
  initFooter
} from "./components/footer.js";

import categoriesSection, {
  initCategories
} from "./components/categories.js";

import testimonialsSection, {
  initTestimonials
} from "./components/testimonials.js";

import quoteSection, {
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
// APP ROOT
// =========================

const app =
  document.getElementById(
    "app"
  );






// =========================
// RENDER APP
// =========================

const renderApp = () => {

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

};








// =========================
// INIT COMPONENTS
// =========================

const initApp = () => {

  initNavbar();

  initHero();

  initMovingBooks();

  initTrendingBooks();

  initFlashDeals();

  initCommunity();

  initFooter();

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

};








// =========================
// MOBILE RESIZE FIX
// =========================

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 768
    ) {

      document.body.style.overflow =
        "";

    }

  }
);








// =========================
// START APP
// =========================

renderApp();

initApp();