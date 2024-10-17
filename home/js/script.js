document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#image-carousel', {
        heightRatio: 0.5,
        type: 'loop',
    }).mount();
});

const images = [
    '/home/img/banner-1.jpg',
    '/home/img/banner-2.jpg',
    '/home/img/banner-3.jpg'
];

function randomizeBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    document.querySelector('.home_page').style.backgroundImage = `url(${randomImage})`;
}

window.onload = randomizeBackground;