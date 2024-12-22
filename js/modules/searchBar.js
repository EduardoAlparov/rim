export default () => {
    const bars = document.querySelectorAll('.js-search-bar');

    bars.forEach((bar) => {
        bar.addEventListener('click', () => {
            bar.classList.add('search-bar--show-dropdown');

            window.addEventListener('click', (e) => {
                if(!e.target.closest('.search-bar') || e.target.closest('.search-bar__dropdown-link')) {
                    bar.classList.remove('search-bar--show-dropdown');
                }
            })
        })
    })
}
