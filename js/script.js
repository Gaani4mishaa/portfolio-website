const scrollTop = document.getElementById("scrollTop");
const scrollBottom = document.getElementById("scrollBottom");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

scrollBottom.addEventListener("click", () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
});