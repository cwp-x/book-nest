import throttle from "./throttle.js";






const revealElements = () => {

  return document.querySelectorAll(
    ".fade-in, .slide-up"
  );

};








const revealOnScroll = () => {

  const elements =
    revealElements();






  const triggerBottom =
    window.innerHeight * 0.85;






  elements.forEach(
    (element) => {

      const elementTop =
        element
          .getBoundingClientRect()
          .top;






      if (
        elementTop <
        triggerBottom
      ) {

        element.classList.add(
          "visible"
        );

      }

      else {

        element.classList.remove(
          "visible"
        );

      }

    }
  );

};








const throttledReveal =
  throttle(
    revealOnScroll,
    100
  );








export const initRevealAnimations = () => {

  revealOnScroll();






  window.addEventListener(
    "scroll",
    throttledReveal
  );

};








export const animateButton = (
  button
) => {

  if (!button) {
    return;
  }






  button.classList.add(
    "pulse-animation"
  );






  setTimeout(() => {

    button.classList.remove(
      "pulse-animation"
    );

  }, 700);

};








export const animateCardHover = (
  selector
) => {

  const cards =
    document.querySelectorAll(
      selector
    );






  cards.forEach(
    (card) => {

      card.addEventListener(
        "mouseenter",
        () => {

          card.classList.add(
            "glow-hover"
          );

        }
      );






      card.addEventListener(
        "mouseleave",
        () => {

          card.classList.remove(
            "glow-hover"
          );

        }
      );

    }
  );

};








export const fadeOutElement = (
  element,
  duration = 300
) => {

  if (!element) {
    return;
  }






  element.style.transition =
    `opacity ${duration}ms ease`;






  element.style.opacity = "0";






  setTimeout(() => {

    element.remove();

  }, duration);

};








export const fadeInElement = (
  element,
  duration = 300
) => {

  if (!element) {
    return;
  }






  element.style.opacity = "0";






  requestAnimationFrame(
    () => {

      element.style.transition =
        `opacity ${duration}ms ease`;






      element.style.opacity = "1";

    }
  );

};