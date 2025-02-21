const menuToggle = document.querySelector('#menu-toggle');
const regularNav = document.querySelector('.header');
const menuContent = document.querySelector('.navigation-box');
const overlay = document.querySelector('.overlay.header-toggle');

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function toggleHeading() {
    $('h1').stop(true, true).fadeToggle(300);
}

function closeMenu(e) {
    toggleHeading();
    $(regularNav).removeClass('toggled');
    $(menuToggle).removeClass('open');
    $(menuContent).removeClass('active');
    $(overlay).removeClass('active');
    $('.logo').stop(true, true).fadeIn(300);
    enableScroll();
}

function openMenu(e) {
    if ($(menuToggle).hasClass('open')) {
        closeMenu();
    } else {
        toggleHeading();
        window.scrollTo(0, 0);
        $(regularNav).addClass('toggled');
        $(menuContent).addClass('active');
        $(overlay).addClass('active');
        $(menuToggle).addClass('open');
        $('.logo').stop(true, true).fadeOut(300);
        disableScroll();
    }
}

$(menuToggle).click(openMenu);
$('#close-icon').click(closeMenu);

let animationTarget = ".animate .col img, h1.slide-in";
let firstTime = true;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check if it's an image or an h1 element
            if ($(entry.target).is('img')) {
                // Check if the image is on the left or right side of the screen
                const imagePosition = $(entry.target).offset().left + $(entry.target).outerWidth() / 2;
                const screenMidPoint = $(window).width() / 2;

                if (imagePosition < screenMidPoint) {
                    $(entry.target).addClass("slideInFromLeft");
                } else {
                    $(entry.target).addClass("slideInFromRight");
                }
            } else if ($(entry.target).is('h1')) {
                // Apply the slide-up animation to h1
                $(entry.target).addClass("slideInFromBottom");
            }
        }
    });
});

const targets = $(animationTarget);
targets.each(function () {
    observer.observe(this);
});

$(window).scroll(function () {
    let contentToCheck = '.animated';
    var $contentElement = $(contentToCheck);

    if (firstTime == true && $contentElement.length > 0) {
        var top_of_element = $contentElement.offset().top;
        var bottom_of_element = top_of_element + $contentElement.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            firstTime = false;
        } else {
            return;
        }
    } else {
        return;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollDownButton = document.querySelector(".scroll-down");

    if (!scrollDownButton) {
        return;
    } else {
        scrollDownButton.addEventListener("click", function() {
            const sections = document.querySelectorAll(".section");
            const currentScroll = window.scrollY;

            for (const section of sections) {
                if (section.offsetTop > currentScroll) {
                    smoothScrollTo(window.scrollY, section.offsetTop, 400); // Adjust duration here (in ms)
                    break;
                }
            }
        });
    }

    function smoothScrollTo(start, end, duration) {
        const distance = end - start;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOutQuad(progress));
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        window.requestAnimationFrame(step);
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImage = document.querySelector('.lightbox-image');
//     const closeBtn = document.querySelector('.lightbox-close');

//     if (!lightbox) return;

//     document.querySelectorAll('.image-wrapper img').forEach((img) => {
//         img.addEventListener('click', () => {
//             lightboxImage.src = img.src;
//             lightbox.classList.add('visible');
//         });
//     });

//     if (closeBtn) {
//         closeBtn.addEventListener('click', () => {
//             lightbox.classList.remove('visible');
//         });
//     }

//     lightbox.addEventListener('click', (e) => {
//         if (e.target === lightbox) {
//             lightbox.classList.remove('visible');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const nextBtn = document.querySelector('.lightbox-next'); // Right arrow
    const prevBtn = document.querySelector('.lightbox-prev'); // Left arrow

    // Collect all images inside .image-wrapper
    const images = Array.from(document.querySelectorAll('.image-wrapper img'));
    let currentIndex = 0;

    if (!lightbox || images.length === 0) return;

    // Open lightbox with selected image
    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightbox.classList.add('visible');
    };

    // Add event listeners to images for opening the lightbox
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    // Function to navigate to the next image
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length; // Loops back to first
        lightboxImage.src = images[currentIndex].src;
    };

    // Function to navigate to the previous image
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loops to last if at first
        lightboxImage.src = images[currentIndex].src;
    };

    // Click events for Next and Previous buttons
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);

    // Close lightbox when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('visible');
        });
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('visible');
        }
    });

    // Allow navigation using keyboard (Arrow Left, Arrow Right, Escape)
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('visible')) {
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'Escape') lightbox.classList.remove('visible');
        }
    });
});

const cookieBanner = document.querySelector(".cookie-banner-wrapper");
const cookiesAccepted = document.querySelector("#accept-cookies");
const blackOverlay = document.querySelector("#overlay");

// Accept cookies
cookiesAccepted.addEventListener("click", function acceptCookies() {
    blackOverlay.classList.add("hide-cookie-banner");
    cookieBanner.classList.add("hide-cookie-banner");
    storeCookieConsent();
});

function storeCookieConsent() {
    localStorage.cookies = "accepted";
}

window.addEventListener("DOMContentLoaded", function() {
    if ("cookies" in localStorage) {
        blackOverlay.classList.add("hide-cookie-banner");
        cookieBanner.classList.add("hide-cookie-banner");
    } else {
        // Shows cookieBanner
    }
});