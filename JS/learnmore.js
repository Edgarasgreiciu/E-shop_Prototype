
/*----------  Swiper.js  ----------*/

var swiper = new Swiper('.swiper-container', {
    slidesPerView: '2',
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
    navigation: {
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
    }
  });

/*----------  Navigation for small screen  ----------*/

const navButtonOpen = document.querySelector('.nav-button-open');
const navButtonClose = document.querySelector('.nav-button-close');
const navSmall = document.querySelector('.nav-small');
const containerMain = document.querySelector('.container-main');

navButtonOpen.addEventListener('click', ()=> {
    if(navSmall.style.left = '-70%'){
        navSmall.style.left = '0';
        navButtonOpen.classList.add('display-none');
        navButtonClose.classList.remove('display-none');
        containerMain.classList.add('blur');
    }
})

navButtonClose.addEventListener('click', ()=> {
    if(navSmall.style.left = '0'){
        navSmall.style.left = '-70%';
        navButtonOpen.classList.remove('display-none');
        navButtonClose.classList.add('display-none');
        containerMain.classList.remove('blur');
    }
})

