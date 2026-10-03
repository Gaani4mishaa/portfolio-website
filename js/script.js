const scrollTopButton = document.getElementById("scrollTop");
const scrollBottomButton = document.getElementById("scrollBottom");

if (scrollTopButton && scrollBottomButton) {
    scrollTopButton.style.display = "none";

    window.addEventListener("scroll", () => {
        scrollTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    scrollBottomButton.addEventListener("click", () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
}
