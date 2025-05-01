const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')

dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault()
    dropdownMenu.classList.toggle('show');
})

document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    }
})