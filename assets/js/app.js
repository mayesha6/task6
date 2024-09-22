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