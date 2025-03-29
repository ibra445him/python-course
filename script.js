document.addEventListener("DOMContentLoaded", ()=> {
    const menubutton = document.querySelector(".menubtn");
    const navList = document.querySelector(".nav_bar");
    
    menubutton.addEventListener("click", ()=> {
        navList.classList.toggle("active");
    })
})