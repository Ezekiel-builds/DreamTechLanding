const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            section.classList.add("show");
        }
    })
})

const form = document.querySelector(".contactForm");
const message = document.getElementById("message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[A-Za-z]+$/;

function showError(input, text) {
    input.classList.add("error")
    message.textContent = text;
    message.style.color = "blue"
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const name = form.name.value;
    const email = form.email.value
    const textArea = form.message.value;

    if(!emailPattern.test(email)) {
        showError(form.email, "Invalid email input!");
        return;
    }

    if (!namePattern.test(name)) {
        showError(form.name, "Invalid name pattern")
        return;
    }

    if (textArea.length > 1000) {
        showError(form.message, "Message's too long");
        return;
    }

    message.textContent = "🥳 Welcome to DreamTech";
    message.style.color = "green";
    form.reset();
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("active");
})