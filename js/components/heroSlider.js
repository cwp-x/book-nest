const heroSlides = [

  {
    id: 1,

    title:
      "Read Smarter, Feel Deeper",

    description:
      "Discover emotional stories, trending books, and meaningful reading experiences.",

    image:
      "./assets/images/banners/banner-1.jpg"
  },


  {
    id: 2,

    title:
      "Late Night Reading Vibes",

    description:
      "Curated books and calm reading experiences designed for peaceful nights.",

    image:
      "./assets/images/banners/banner-2.jpg"
  },


  {
    id: 3,

    title:
      "Build Better Habits Through Reading",

    description:
      "Explore books that improve mindset, productivity, and personal growth.",

    image:
      "./assets/images/banners/banner-3.jpg"
  }

];








let currentSlide = 0;

let autoPlayInterval;








const updateHeroContent = () => {

  const heroTitle =
    document.querySelector(
      ".hero-left h1"
    );



  const heroDescription =
    document.querySelector(
      ".hero-description"
    );



  const heroImage =
    document.querySelector(
      ".hero-image"
    );






  if (
    !heroTitle ||
    !heroDescription ||
    !heroImage
  ) {
    return;
  }






  const currentData =
    heroSlides[currentSlide];






  heroTitle.innerHTML =
    currentData.title;






  heroDescription.textContent =
    currentData.description;






  heroImage.src =
    currentData.image;

};








const nextSlide = () => {

  currentSlide++;






  if (
    currentSlide >=
    heroSlides.length
  ) {

    currentSlide = 0;

  }






  updateHeroContent();

};








const startAutoPlay = () => {

  autoPlayInterval =
    setInterval(
      nextSlide,
      5000
    );

};








const stopAutoPlay = () => {

  clearInterval(
    autoPlayInterval
  );

};








export const initHeroSlider = () => {

  const heroSection =
    document.querySelector(
      ".hero"
    );






  if (!heroSection) {
    return;
  }






  updateHeroContent();






  startAutoPlay();






  heroSection.addEventListener(
    "mouseenter",
    stopAutoPlay
  );






  heroSection.addEventListener(
    "mouseleave",
    startAutoPlay
  );

};





export default initHeroSlider;