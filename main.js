document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {
        if (bar.classList.contains("html")) {
            bar.style.width = "80%";
        } else if (bar.classList.contains("css")) {
            bar.style.width = "75%";
        } else if (bar.classList.contains("js")) {
            bar.style.width = "50%";
        } else if (bar.classList.contains("mysql")) {
            bar.style.width = "30%";
        } else if (bar.classList.contains("python")) {
            bar.style.width = "25%";
        }
    });
});
