const projects = [
    {
        title: "Bouwvakker met ervaring in xyz",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/template/",
        tag: "job-3",
    },
    {
        title: "Bouwvakker met ervaring in xyz",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/template/",
        tag: "job-2",
    },
    {
        title: "Bouwvakker met ervaring in xyz",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/template/",
        tag: "job-3",
    },
    {
        title: "Bouwvakker met ervaring in xyz",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/template/",
        tag: "job-1",
    },
    {
        title: "Bouwvakker met ervaring in xyz",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/template/",
        tag: "job-1",
    },
];

function createCards(e) {
    const target = document.querySelector(".projects-wrapper");

    const cards = projects.map(item => {
        return `
            <a class="project ${item.tag}" href="${item.link}">
                <div class="image-wrapper">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="content">
                    <p class="heading">
                        <span class="tag">${item.tag}</span> | 
                        <span class="title">${item.title}</span>
                    </p>
                </div>
            </a>
        `;
    }).join('');

    target.innerHTML = cards;
}

function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.projects-wrapper .project').fadeOut();

    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.projects-wrapper .project').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});