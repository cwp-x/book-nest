export const formatPrice = (
  price
) => {

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }
  ).format(price);

};








export const formatRating = (
  rating
) => {

  return `⭐ ${rating}`;

};








export const truncateText = (
  text,
  maxLength = 100
) => {

  if (!text) {
    return "";
  }






  if (
    text.length <= maxLength
  ) {

    return text;

  }






  return (
    text.slice(
      0,
      maxLength
    ) + "..."
  );

};








export const scrollToSection = (
  sectionId
) => {

  const section =
    document.getElementById(
      sectionId
    );






  if (!section) {
    return;
  }






  section.scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

};








export const createElement = (
  tag,
  className = ""
) => {

  const element =
    document.createElement(
      tag
    );






  if (className) {

    element.className =
      className;

  }






  return element;

};








export const toggleClass = (
  element,
  className
) => {

  if (!element) {
    return;
  }






  element.classList.toggle(
    className
  );

};








export const addClass = (
  element,
  className
) => {

  if (!element) {
    return;
  }






  element.classList.add(
    className
  );

};








export const removeClass = (
  element,
  className
) => {

  if (!element) {
    return;
  }






  element.classList.remove(
    className
  );

};








export const getRandomItem = (
  array
) => {

  if (
    !Array.isArray(array) ||
    !array.length
  ) {

    return null;

  }






  const randomIndex =
    Math.floor(
      Math.random() *
      array.length
    );






  return array[randomIndex];

};








export const capitalize = (
  text
) => {

  if (!text) {
    return "";
  }






  return (
    text.charAt(0)
      .toUpperCase() +
    text.slice(1)
  );

};








export const wait = (
  duration = 300
) => {

  return new Promise(
    (resolve) => {

      setTimeout(
        resolve,
        duration
      );

    }
  );

};








export const generateId = () => {

  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, 8)
  );

};








export const isMobile = () => {

  return window.innerWidth <= 768;

};