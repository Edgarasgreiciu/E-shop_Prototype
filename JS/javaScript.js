
/*----------  Pop up modal  ----------*/

const shoppingCart = document.querySelectorAll('.shopping-cart');
const arrayShoppingCart = Array.from(shoppingCart);
const containerModal = document.querySelector('.container-modal');
const modalX = document.querySelector('.modal-x');
const modal = document.querySelector('.modal');

arrayShoppingCart.forEach(cart => {
    cart.addEventListener('click', ()=>{
        containerModal.style.transform = 'scale(1)';
    })
});

modalX.addEventListener('click', ()=>{
    containerModal.style.transform = 'scale(0)';
})

const continueShoppingBtn = document.querySelector('.continue-shopping');

continueShoppingBtn.addEventListener('click', ()=> {
    containerModal.style.transform = 'scale(0)';
})

modalX.addEventListener('mouseleave', ()=> {
    modalX.classList.add('mouseleave-animation');
})

containerModal.addEventListener('click', (e)=> {
    if(e.target.classList.contains('container-modal')){
        containerModal.style.transform = 'scale(0)';
    }
})


/*----------  Products hover effect  ----------*/

const products = Array.from(document.querySelectorAll('.products'));
const productImage = Array.from(document.querySelectorAll('.product-inner-image'));



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
