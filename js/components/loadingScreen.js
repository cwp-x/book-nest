const createLoader = () => {

  return `

    <div class="loading-screen" id="loadingScreen">

      <div class="loader-content">

        <div class="loader-logo">

          Book<span>Nest</span>

        </div>



        <div class="loader-spinner"></div>



        <p class="loader-text">

          Preparing your reading experience...

        </p>

      </div>

    </div>

  `;
};








const hideLoader = () => {

  const loader =
    document.getElementById(
      "loadingScreen"
    );



  if (!loader) {
    return;
  }






  loader.classList.add(
    "hide-loader"
  );






  setTimeout(() => {

    loader.remove();

  }, 700);

};








export const initLoadingScreen = () => {

  document.body.insertAdjacentHTML(
    "afterbegin",
    createLoader()
  );






  window.addEventListener(
    "load",
    () => {

      setTimeout(() => {

        hideLoader();

      }, 1200);

    }
  );

};





export default initLoadingScreen;