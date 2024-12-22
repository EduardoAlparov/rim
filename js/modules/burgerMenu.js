export default () => {
    const btns = document.querySelectorAll('.js-burger-menu');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('burger-menu-is-open');

            window.addEventListener('click', (e) => {
                if(e.target.closest('.js-mobile-search-link')) {
                    document.body.classList.remove('burger-menu-is-open');
                }
            })
        })
    })
}
