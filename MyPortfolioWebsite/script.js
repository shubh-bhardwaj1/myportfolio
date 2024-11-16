// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Form Validation (Basic Email Validation)
const contactForm = document.querySelector("#contactForm");
const emailInput = document.querySelector("#email");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Form submitted successfully!");
    // Code for submitting form can be added here (AJAX or Form submission)
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Fade-in Animation for About Section when Visible
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', function () {
    if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('fade-in');
    }
});

// Helper function to check if an element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

// Adding Scroll Effect to About Section
document.addEventListener("DOMContentLoaded", function () {
    aboutSection.classList.add("hidden");
    setTimeout(() => {
        aboutSection.classList.remove("hidden");
        aboutSection.classList.add("fade-in");
    }, 500); // Delaying the fade-in for smooth transition
});

// Contact Button Dynamic Text Change on Hover
const contactButton = document.querySelector("button");

contactButton.addEventListener("mouseover", function () {
    contactButton.innerText = "Let's Connect!";
});

contactButton.addEventListener("mouseout", function () {
    contactButton.innerText = "Contact Me";
});

// Loading Dynamic Content (Example: Skills List)
const skillsList = document.querySelector("#skillsList");

document.addEventListener("DOMContentLoaded", function () {
    const skills = ["Web Development", "Mobile App Development", "React.js", "Python", "JavaScript", "Node.js"];
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
});

// Event listener for when the user scrolls
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");

    if (scrollPosition > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
