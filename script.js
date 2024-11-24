// Pizza Gallery Slider
let currentIndex = 0;
const images = document.querySelectorAll("#pizza-gallery .pizza-image");
const totalImages = images.length;

function changeImage() {
    images.forEach((image, index) => {
        image.style.display = index === currentIndex ? "block" : "none";
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    changeImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    changeImage();
}

// Call on page load
changeImage();

// Auto change images every 3 seconds
setInterval(nextImage, 3000);

// Button hover effect
const buttons = document.querySelectorAll(".cta-button");
buttons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
});

// Scroll to top button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "↑ Scroll to Top";
scrollToTopButton.id = "scroll-to-top";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
