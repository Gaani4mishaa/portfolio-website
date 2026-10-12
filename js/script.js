const scrollTopButton = document.getElementById("scrollTop");
const scrollBottomButton = document.getElementById("scrollBottom");
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const profileFrame = document.querySelector(".profile-frame");
const profileImage = profileFrame?.querySelector("img");

if (profileFrame && profileImage) {
    const showProfileImage = () => profileFrame.classList.add("has-image");
    const showProfilePlaceholder = () => profileFrame.classList.remove("has-image");

    profileImage.addEventListener("load", showProfileImage, { once: true });
    profileImage.addEventListener("error", showProfilePlaceholder, { once: true });

    if (profileImage.complete && profileImage.naturalWidth > 0) {
        showProfileImage();
    }
}

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

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.focus();
        }
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
    const updateScrollButtons = () => {
        const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;
        scrollTopButton.style.display = window.scrollY > 300 ? "block" : "none";
        scrollBottomButton.style.display = atBottom ? "none" : "block";
    };

    updateScrollButtons();

    window.addEventListener("scroll", updateScrollButtons);

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
