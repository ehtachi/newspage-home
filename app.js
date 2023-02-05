let btn = document.querySelectorAll(".menu")
let nav = document.querySelector(".nav-list")
let shadow = document.querySelector(".shadow")
let body = document.body;

btn.forEach((e) => {
    e.addEventListener("click", () => {
        nav.classList.toggle("hide");
        shadow.classList.toggle("hide");

        //to prevent scrolling when menu is open
        if(!nav.classList.contains("hide")){
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    })
})

shadow.addEventListener("click", () => {
        nav.classList.toggle("hide");
        shadow.classList.toggle("hide");

        if(!nav.classList.contains("hide")){
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
})
