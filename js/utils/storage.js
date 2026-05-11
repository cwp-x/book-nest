import {
  STORAGE_KEYS
} from "./constants.js";






export const saveToStorage = (
  key,
  value
) => {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  }

  catch (error) {

    console.error(
      "Storage Save Error:",
      error
    );

  }

};






export const getFromStorage = (
  key
) => {

  try {

    const data =
      localStorage.getItem(key);



    return data
      ? JSON.parse(data)
      : null;

  }

  catch (error) {

    console.error(
      "Storage Read Error:",
      error
    );

    return null;
  }

};






export const removeFromStorage = (
  key
) => {

  try {

    localStorage.removeItem(
      key
    );

  }

  catch (error) {

    console.error(
      "Storage Remove Error:",
      error
    );

  }

};






export const clearStorage = () => {

  try {

    localStorage.clear();

  }

  catch (error) {

    console.error(
      "Storage Clear Error:",
      error
    );

  }

};






// =========================
// CART HELPERS
// =========================

export const saveCart = (
  cart
) => {

  saveToStorage(
    STORAGE_KEYS.CART,
    cart
  );

};






export const getCart = () => {

  return (
    getFromStorage(
      STORAGE_KEYS.CART
    ) || []
  );

};






// =========================
// WISHLIST HELPERS
// =========================

export const saveWishlist = (
  wishlist
) => {

  saveToStorage(
    STORAGE_KEYS.WISHLIST,
    wishlist
  );

};






export const getWishlist = () => {

  return (
    getFromStorage(
      STORAGE_KEYS.WISHLIST
    ) || []
  );

};






// =========================
// READER MODE
// =========================

export const saveReaderMode = (
  mode
) => {

  saveToStorage(
    STORAGE_KEYS.READER_MODE,
    mode
  );

};






export const getReaderMode = () => {

  return (
    getFromStorage(
      STORAGE_KEYS.READER_MODE
    ) || "default"
  );

};