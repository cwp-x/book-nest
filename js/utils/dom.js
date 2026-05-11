export const select = (
  selector
) => {

  return document.querySelector(
    selector
  );

};






export const selectAll = (
  selector
) => {

  return document.querySelectorAll(
    selector
  );

};






export const getById = (
  id
) => {

  return document.getElementById(
    id
  );

};






export const createElement = (
  tag
) => {

  return document.createElement(
    tag
  );

};






export const setHTML = (
  element,
  html
) => {

  if (!element) {
    return;
  }



  element.innerHTML = html;

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






export const on = (
  element,
  event,
  callback
) => {

  if (!element) {
    return;
  }



  element.addEventListener(
    event,
    callback
  );

};






export const off = (
  element,
  event,
  callback
) => {

  if (!element) {
    return;
  }



  element.removeEventListener(
    event,
    callback
  );

};






export const append = (
  parent,
  child
) => {

  if (
    !parent ||
    !child
  ) {
    return;
  }



  parent.appendChild(
    child
  );

};






export const prepend = (
  parent,
  child
) => {

  if (
    !parent ||
    !child
  ) {
    return;
  }



  parent.prepend(
    child
  );

};






export const remove = (
  element
) => {

  if (!element) {
    return;
  }



  element.remove();

};