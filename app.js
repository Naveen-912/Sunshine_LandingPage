const navslide=() =>{
    const burger = document.querySelector(".hamburger");
    const navlinks = document.querySelector(".menu");
    
    burger.addEventListener("click",()=>{
        navlinks.classList.toggle("nav-active");
    });
}
navslide();