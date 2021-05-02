/*=============================================
=            Product page            =
=============================================*/





/*----------  Bottom table  ----------*/


let tag1 = document.querySelector('.tag-1');
let tag2 = document.querySelector('.tag-2');
let tag3 = document.querySelector('.tag-3');

let infoTag1 = document.querySelector('.info-tag-1');
let infoTag2 = document.querySelector('.info-tag-2');
let infoTag3 = document.querySelector('.info-tag-3');

tag2.addEventListener('click', ()=>{
    infoTag1.classList.add('display-none');
    infoTag3.classList.add('display-none');
    infoTag2.classList.remove('display-none');
    tag2.classList.add('tag-color');
    tag2.classList.add('tag-scale');
    tag1.classList.remove('tag-color');
    tag1.classList.remove('tag-scale');
    tag3.classList.remove('tag-color');
    tag3.classList.remove('tag-scale');
});

tag1.addEventListener('click', ()=>{
    infoTag1.classList.remove('display-none');
    infoTag3.classList.add('display-none');
    infoTag2.classList.add('display-none');
    tag1.classList.add('tag-color');
    tag1.classList.add('tag-scale');
    tag2.classList.remove('tag-color');
    tag2.classList.remove('tag-scale');
    tag3.classList.remove('tag-color');
    tag3.classList.remove('tag-scale');
});

tag3.addEventListener('click', ()=>{
    infoTag2.classList.add('display-none');
    infoTag3.classList.add('display-none');
    infoTag3.classList.remove('display-none');
    tag3.classList.add('tag-color');
    tag3.classList.add('tag-scale');
    tag1.classList.remove('tag-color');
    tag1.classList.remove('tag-scale');
    tag2.classList.remove('tag-color');
    tag2.classList.remove('tag-scale');
});

/*----------  Change image  ----------*/


let containerMainImage = document.querySelector('.container-main-image');
let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let bottomProductImage = document.querySelectorAll('.bottom-product-image');

image1.addEventListener('click', ()=> {
    containerMainImage.innerHTML=`<img src="../IMG/Gold collection/gold item 2.1.jpg" alt="Liuve v1. bracelet" class="main-product-image">`;
    bottomProductImage.forEach(element => {
        element.classList.add('opacity-6')
    });
    image1.classList.remove('opacity-6')
});

image2.addEventListener('click', ()=> {
    containerMainImage.innerHTML=`<img src="../IMG/Gold collection/gold item 2.2.jpg" alt="Liuve v1. bracelet" class="main-product-image">`;
    bottomProductImage.forEach(element => {
        element.classList.add('opacity-6')
    });
    image2.classList.remove('opacity-6')
});

image3.addEventListener('click', ()=> {
    containerMainImage.innerHTML=`<img src="../IMG/Gold collection/gold item 2.3.jpg" alt="Liuve v1. bracelet" class="main-product-image">`;
    bottomProductImage.forEach(element => {
        element.classList.add('opacity-6')
    });
    image3.classList.remove('opacity-6')
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

