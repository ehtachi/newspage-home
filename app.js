let btn = document.querySelectorAll(".menu")
let nav = document.querySelector(".nav-list")
let shadow = document.querySelector(".shadow")
let body = document.body;

btn.forEach((e) => {
    e.addEventListener("click", () => {
        nav.classList.toggle("show");
        // nav.style.transiton = "all 1s"
        shadow.classList.toggle("hide");
        // shadow.style.transiton = "all 1s"


        //to prevent scrolling when menu is open
        if(nav.classList.contains("show")){
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    })
})

shadow.addEventListener("click", () => {
        nav.classList.toggle("show");
        shadow.classList.toggle("hide");
        // nav.style.transiton = "all 1s"
        // shadow.style.transiton = "all 1s"

        if(nav.classList.contains("show")){
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
})