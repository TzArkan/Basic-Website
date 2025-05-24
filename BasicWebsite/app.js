const menu = document.querySelector('#mobile-menu')         // target pe id=mobile-menu din div index.html, cu bar spans
const menuLinks = document.querySelector('.navbar__menu')   // target pe clasa navbar_menu, cu home, about, services, sign up
const navLogo = document.querySelector('#navbar__logo')     // target pe logo



// afisare menu Mobile
const mobileMenu = () => {
    menu.classList.toggle('is-active')                      // active/not active
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu)

// afisam meniul activ cand dam scroll

const highlightMenu = () => {                               // targetam idurile de la navbar menu
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    //console.log(scrollPos);

    // adauga clasa 'highlight' la itemele din menu
    if (window.innerWidth > 960 && scrollPos < 600)         // sa nu lucreze clasa asta pe ecrane mai mici de 960
    {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 1400)
    {
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 2345)
    {
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.add('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem)
    {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

//inchidere menu mobile cand dam click pe un item din menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)