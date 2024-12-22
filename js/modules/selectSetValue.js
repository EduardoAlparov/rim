export default () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach((select) => {
        const inputs = select.querySelectorAll('input[type="radio"]');
        const cur = select.querySelector('.select__current');

        cur.addEventListener('click', () => {
            cur.classList.toggle('select__current--active')
        })

        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const text = e.target.nextElementSibling.textContent;
                cur.textContent = text;
                cur.classList.remove('select__current--opacity')
                cur.classList.remove('select__current--active')
            })
        })
    })
}
