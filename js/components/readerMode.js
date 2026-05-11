import {
  saveReaderMode,
  getReaderMode
} from "../utils/storage.js";






const applyReaderMode = (
  mode
) => {

  document.body.dataset.mode =
    mode;






  const button =
    document.getElementById(
      "readerModeBtn"
    );



  if (!button) {
    return;
  }






  if (mode === "reader") {

    button.textContent =
      "Normal Mode";

  }

  else {

    button.textContent =
      "Reader Mode";

  }

};






const toggleReaderMode = () => {

  const currentMode =
    document.body.dataset.mode;






  const newMode =
    currentMode === "reader"
      ? "default"
      : "reader";






  applyReaderMode(
    newMode
  );






  saveReaderMode(
    newMode
  );

};






export const initReaderMode = () => {

  const button =
    document.getElementById(
      "readerModeBtn"
    );






  const savedMode =
    getReaderMode();






  applyReaderMode(
    savedMode
  );






  if (!button) {
    return;
  }






  button.addEventListener(
    "click",
    toggleReaderMode
  );

};





export default initReaderMode;