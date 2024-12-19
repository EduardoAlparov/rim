export default () => {
    const swipers = document.querySelectorAll('.js-ny-carousel-swiper');

    swipers.forEach((swiper) => {
        new Swiper(swiper, {
            slidesPerView: 1,

            navigation: {
                nextEl: swiper.querySelector('.ny-carousel__swiper-btn--next'),
                prevEl: swiper.querySelector('.ny-carousel__swiper-btn--prev'),
            },
        })
    });
}
