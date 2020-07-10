var nav = document.querySelector("nav")
var overlay = document.querySelector(".dim-overlay");
console.log(nav);
console.log(overlay);


menuOpen = () => {
    console.log("click")
    nav.classList.add("open");
    overlay.classList.add("open");
}

menuClose = () => {
    nav.classList.remove("open");
    overlay.classList.remove("open");
}