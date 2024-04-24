// /////////////////////////////////////MENU HAMBURGER/////////////////////////////////
let menuMobile = document.querySelector('.menu_mobile')

function toggleMenu(){
    let ulNav = document.querySelector('.ul_nav')
    ulNav.classList.toggle('active');
    
}
menuMobile.addEventListener('click', toggleMenu);
// /////////////////////////////FECHA MENU HAMBURGER /////////////////////////////////


//////////////////////////////////////DATA ANIME////////////////////////////////////////////////////////////
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate')
        } else {
            element.classList.remove('animate');
        }
    })
}
animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll();
})
//////////////////////////////////////////FECHA DATA ANIME///////////////////////////////////////////////////


