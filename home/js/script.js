document.addEventListener('DOMContentLoaded', function() {
    new Splide('#image-carousel', {
      heightRatio: 0.5,
      type: 'loop',
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      autoscroll: {
        speed: 3,
      },
    }).mount();
  });

const images = [
    '/home/img/banner-1.jpg',
    '/home/img/banner-2.jpg',
    '/home/img/banner-3.jpg',
    '/home/img/banner-4.jpg',
    '/home/img/banner-5.jpg',
    '/home/img/banner-6.jpg',
    '/home/img/banner-7.jpg',
    '/home/img/banner-8.jpg'
];

function randomizeBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    document.querySelector('.home_page').style.backgroundImage = `url(${randomImage})`;
}

window.onload = randomizeBackground;