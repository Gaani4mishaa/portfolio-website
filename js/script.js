const scrollTopButton = document.getElementById("scrollTop");
const scrollBottomButton = document.getElementById("scrollBottom");
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
        themeToggle.textContent = nextTheme === "dark" ? "🌙" : "☀️";
    });
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealElements.forEach((element) => observer.observe(element));
}

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
