import setHeaderPadding from "./modules/setHeaderPadding.js";
import nyCarouselSwiper from "./modules/nyCarouselSwiper.js";
import burgerMenu from "./modules/burgerMenu.js";
import selectSetValue from "./modules/selectSetValue.js";
import searchBar from "./modules/searchBar.js";

import Modal from "./modules/Modal.js";
import masks from "./modules/masks.js";
import daysMask from "./modules/daysMask.js";
import validation from "./modules/validation.js";

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

    masks();
    daysMask();
    validation();

    burgerMenu();
    setHeaderPadding();
    nyCarouselSwiper();
    selectSetValue();
    searchBar();
})
