const productMenu = document.querySelector(".product-menu-list-1")
const productCard = document.querySelector(".hidden");


productMenu.addEventListener("click", ()=>{
    productCard.classList.toggle("hidden")
})


// show mobile menu on click hamburger

const mobile_menu = document.querySelector(".mobile-menu");

const hamburger_menu = document.querySelector(".hamburger-menu");

const close_menu = document.querySelector(".close-menu")

hamburger_menu.addEventListener("click", ()=>{

    mobile_menu.classList.add("show-mobile-menu")
})

close_menu.addEventListener("click", ()=>{

    mobile_menu.classList.remove("show-mobile-menu")
})

// show mobile products

const mobile_li_1 = document.querySelector(".mobile_li_1");
const mobile_products_container = document.querySelector(".mobile_products_container");
const product_close_btn = document.querySelector(".product-close-btn");

mobile_li_1.addEventListener("click", ()=>{
    mobile_menu.classList.remove("show-mobile-menu");
    mobile_products_container.classList.add("mproducts__show")
})


product_close_btn.addEventListener("click", ()=>{
    mobile_products_container.classList.remove("mproducts__show")

})