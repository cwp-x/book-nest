const pauseSlider = (
  slider
) => {

  if (!slider) {
    return;
  }



  slider.style.animationPlayState =
    "paused";

};






const resumeSlider = (
  slider
) => {

  if (!slider) {
    return;
  }



  slider.style.animationPlayState =
    "running";

};






const setupSliderHover = (
  slider
) => {

  if (!slider) {
    return;
  }






  slider.addEventListener(
    "mouseenter",
    () => {

      pauseSlider(
        slider
      );

    }
  );






  slider.addEventListener(
    "mouseleave",
    () => {

      resumeSlider(
        slider
      );

    }
  );

};






export const initInfiniteSlider = () => {

  const sliders =
    document.querySelectorAll(
      ".slider-track"
    );






  if (!sliders.length) {
    return;
  }






  sliders.forEach(
    (slider) => {

      setupSliderHover(
        slider
      );

    }
  );

};





export default initInfiniteSlider;