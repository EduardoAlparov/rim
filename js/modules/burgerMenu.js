export default () => {
    const btns = document.querySelectorAll('.js-burger-menu');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('burger-menu-is-open');
        })
    })
}
