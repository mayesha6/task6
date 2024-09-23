 const menuBtn = document.getElementById("menu-btn");
 const closeBtn = document.getElementById("close-btn");
 const commonBtn = document.getElementById("common-btn");
 const mainMenu = document.getElementById("main-menu");
 menuBtn.addEventListener("click", ()=>{
    closeBtn.classList.add("block");
    commonBtn.classList.add("block");
    mainMenu.classList.add("block");
    menuBtn.classList.add("hidden");

 })
 closeBtn.addEventListener("click", ()=>{
    closeBtn.classList.remove("block");
    commonBtn.classList.remove("block");
    mainMenu.classList.remove("block");
    menuBtn.classList.remove("hidden");
 })

let slide = new Swiper('.slide', {
   slidesPerView: 1,
   loop: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      768: {
        slidesPerView: 2, // 3 slides per view for screens >= 768px
        spaceBetween: 30, // 30px space between slides
      },
      1024: {
        slidesPerView: 3, // 4 slides per view for screens >= 1024px
        spaceBetween: 40, // 40px space between slides
      },
    },
 });