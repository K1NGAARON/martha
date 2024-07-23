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

function closeMenu(e) {
    $(regularNav).removeClass('toggled');
    $(menuToggle).removeClass('open'); 
    $(menuContent).removeClass('active');
    $(overlay).removeClass('active');
    enableScroll();
}

function openMenu(e) {
    if ($(menuToggle).hasClass('open')) {
        closeMenu();
    } else {
        window.scrollTo(0, 0);
        $(regularNav).addClass('toggled');
        $(menuContent).addClass('active');
        $(overlay).addClass('active');
        $(menuToggle).addClass('open');
        disableScroll();
    }
}

$(menuToggle).click(openMenu);
$('#close-icon').click(closeMenu);

let animationStyle = "slideUp";
let animationTarget = ".animate";
let firstTime = true;

// SLIDE UP ROWS IN VIEWPORT
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass(animationStyle);
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