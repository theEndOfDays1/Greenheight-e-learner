window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll' , window.scrollY > 0)
})


const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const header = document.getElementById("header");

openMenu.addEventListener("click", function(){
    header.style.transform = "translateX(0%)";
})
closeMenu.addEventListener("click", function(){
    header.style.transform = "translateX(150%)";
})

/* let recall = window.prompt("Welcome to the Greenheight E-learning community. Please enter your name below");
document.getElementById("span1").innerHTML = "Hello!"+ "&nbsp" + recall + "." + "<br>" + "This is your personal landing page." + "<br>" + "here, you can access your portal and get up -to-date with the latest information that will be dropped occassionaly."*/
