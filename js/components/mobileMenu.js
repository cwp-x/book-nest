import {
  addClass,
  removeClass
} from "../utils/dom.js";






const openMobileMenu = () => {

  const sidebar =
    document.getElementById(
      "mobileSidebar"
    );



  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );



  addClass(
    sidebar,
    "active"
  );



  addClass(
    overlay,
    "active"
  );



  document.body.style.overflow =
    "hidden";

};






const closeMobileMenu = () => {

  const sidebar =
    document.getElementById(
      "mobileSidebar"
    );



  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );



  removeClass(
    sidebar,
    "active"
  );



  removeClass(
    overlay,
    "active"
  );



  document.body.style.overflow =
    "";

};






export const initMobileMenu = () => {

  const openButton =
    document.getElementById(
      "mobileMenuBtn"
    );



  const closeButton =
    document.getElementById(
      "closeSidebarBtn"
    );



  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );





  // =========================
  // OPEN MENU
  // =========================

  if (openButton) {

    openButton.addEventListener(
      "click",
      openMobileMenu
    );

  }





  // =========================
  // CLOSE MENU
  // =========================

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeMobileMenu
    );

  }





  // =========================
  // OVERLAY CLOSE
  // =========================

  if (overlay) {

    overlay.addEventListener(
      "click",
      closeMobileMenu
    );

  }





  // =========================
  // ESC KEY CLOSE
  // =========================

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeMobileMenu();

      }

    }
  );

};





export default initMobileMenu;