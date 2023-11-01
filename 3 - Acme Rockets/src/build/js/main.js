const initApp = () => {
    const hamburguerBtn = document.getElementById('hamburguer-btn') 
    const mobileMenu = document.getElementById('mobile-menu')


    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburguerBtn.addEventListener("click", toggleMenu)
    mobileMenu.addEventListener("click", toggleMenu)

}
document.addEventListener('DOMContentLoaded', initApp) 