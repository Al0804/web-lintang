const text = "Mochammad Lintang Pijar Nusantara";
let index = 0;
let direction = 1;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (direction === 1) {
        typingElement.textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
            direction = -1;
            setTimeout(typeText, 1000);
            return;
        }
    } else {
        typingElement.textContent = text.slice(0, index);
        index--;
        if (index === 0) {
            direction = 1;
            setTimeout(typeText, 500);
            return;
        }
    }
    setTimeout(typeText, 150);
}

typeText();

// kinnies //

const slider = document.querySelector('.kinny-slider');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const cards = document.querySelectorAll('.kinny-card');
        let currentIndex = 0;

        function updateSliderPosition() {
            const cardWidth = cards[0].offsetWidth + 20; // Including gap
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

            // Update button visibility
            prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
            nextBtn.style.display = currentIndex === cards.length - 1 ? 'none' : 'flex';
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        // Initialize position and button visibility
        updateSliderPosition();


// Scroll Effect
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Background Slider
const sliderImages = document.querySelectorAll('.slider-images img');
let currentImage = 0;

function changeBackground() {
    sliderImages.forEach(img => img.style.opacity = '0');
    currentImage = (currentImage + 1) % sliderImages.length;
    sliderImages[currentImage].style.opacity = '0.5';
}

setInterval(changeBackground, 4000);





