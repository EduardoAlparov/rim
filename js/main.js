import setHeaderPadding from "./modules/setHeaderPadding.js";
import nyCarouselSwiper from "./modules/nyCarouselSwiper.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);


    setHeaderPadding();
    nyCarouselSwiper();
})
