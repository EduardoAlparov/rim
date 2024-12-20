import setHeaderPadding from "./modules/setHeaderPadding.js";
import nyCarouselSwiper from "./modules/nyCarouselSwiper.js";

import Modal from "./modules/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    setHeaderPadding();
    nyCarouselSwiper();
})
