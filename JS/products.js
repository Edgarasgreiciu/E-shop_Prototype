
/*----------  Fetch and add items into grid container  ----------*/



const productsContainer = document.querySelector('.products-grid-container');

fetch('products.json')
    .then(response => {
        return response.json();
    })
        .then((data)=>{
            let products = data.products;
            let mapProducts = products.map(funcProducts)
            function funcProducts(item) {
                return `<div class="products products-array" data-name="${item.name}" data-category="${item.category}">
                <a class="product-inner-image ${item.item}" href="product.html"></a>
                <div class="product-inner-info">
                    <h1>${item.name}</h1>
                    <h2>${item.price}</h2>
                    <h3 class="shopping-cart">Add to cart <i class="fas fa-shopping-cart"></i></h3>
                </div>
            </div>`
            }

            productsContainer.innerHTML = mapProducts.join('');
            
            
            /*----------  Search for specific category or name ----------*/
            
            const productsfilter = document.querySelectorAll('.products-array');
            const productsArray = Array.from(productsfilter);
            const searchInput = document.querySelector('#search-input');

            searchInput.addEventListener('keyup', (e)=>{
                // Remove button clicked effect
                goldButton.classList.remove('clicked-button');
                silverButton.classList.remove('clicked-button');
                bronzeButton.classList.remove('clicked-button');
                for(let i = 0; i < productsArray.length; i++ ){
                    productsArray[i].classList.remove('display-none');
                }
                
                const searchString = e.target.value.toLowerCase(); // catch every letter
                for(let i = 0; i < productsArray.length; i++ ){
                    const productCategory = productsArray[i].dataset.category.toLowerCase();
                    const productName = productsArray[i].dataset.name.toLowerCase();

                    if(productCategory.includes(searchString) || productName.includes(searchString)){
                        productsArray[i].classList.remove('display-none');
                    } else {
                        productsArray[i].classList.add('display-none');
                    }
                }
            })

            
            /*----------  Search with button  ----------*/
            
            const goldButton = document.querySelector('.gold-button');
            const silverButton = document.querySelector('.silver-button');
            const bronzeButton = document.querySelector('.bronze-button');
            const xButton = document.querySelector('.x');

            goldButton.addEventListener('click', ()=>{
                goldButton.classList.add('clicked-button');
                silverButton.classList.remove('clicked-button');
                bronzeButton.classList.remove('clicked-button');
                xButton.classList.remove('clicked-button');
                for(let i = 0; i < productsArray.length; i++ ){
                    const productCategory = productsArray[i].dataset.category;

                    if(productCategory == "gold collection"){
                        productsArray[i].classList.remove('display-none');
                    } else {
                        productsArray[i].classList.add('display-none');
                    }
                }
            })

            silverButton.addEventListener('click', ()=>{
                goldButton.classList.remove('clicked-button');
                silverButton.classList.add('clicked-button');
                bronzeButton.classList.remove('clicked-button');
                xButton.classList.remove('clicked-button');
                for(let i = 0; i < productsArray.length; i++ ){
                    const productCategory = productsArray[i].dataset.category;

                    if(productCategory == "silver collection"){
                        productsArray[i].classList.remove('display-none');
                    } else {
                        productsArray[i].classList.add('display-none');
                    }
                }
            })
            
            bronzeButton.addEventListener('click', ()=>{
                goldButton.classList.remove('clicked-button');
                silverButton.classList.remove('clicked-button');
                bronzeButton.classList.add('clicked-button');
                xButton.classList.remove('clicked-button');
                for(let i = 0; i < productsArray.length; i++ ){
                    const productCategory = productsArray[i].dataset.category;

                    if(productCategory == "bronze collection"){
                        productsArray[i].classList.remove('display-none');
                    } else {
                        productsArray[i].classList.add('display-none');
                    }
                }
            })

            xButton.addEventListener('click', ()=>{
                goldButton.classList.remove('clicked-button');
                silverButton.classList.remove('clicked-button');
                bronzeButton.classList.remove('clicked-button');
                for(let i = 0; i < productsArray.length; i++ ){
                    productsArray[i].classList.remove('display-none');
                }
            })

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
        })


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

