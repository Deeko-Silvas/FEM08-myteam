var nav = document.querySelector("nav")
var overlay = document.querySelector(".dim-overlay");
var directors = document.querySelectorAll(".card-btn");

menuOpen = () => {
    nav.classList.add("open");
    overlay.classList.add("open");
}

menuClose = () => {
    nav.classList.remove("open");
    overlay.classList.remove("open");
}

for (let btn of directors) {
    btn.onclick = () => {
        btn.parentElement.classList.toggle("open");
    }
}