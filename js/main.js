import setHeaderPadding from "./modules/setHeaderPadding.js";
import nyCarouselSwiper from "./modules/nyCarouselSwiper.js";
import burgerMenu from "./modules/burgerMenu.js";

import Modal from "./modules/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    const modal = new Modal({
        isOpen: (modal) => {
            document.body.classList.remove('burger-menu-is-open');
        },
        isClose: (modal) => {
        },
    });

    burgerMenu();
    setHeaderPadding();
    nyCarouselSwiper();
})
