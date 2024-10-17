const projects = [
    {
        title: "All-round afwerking",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/all-round-afwerking/",
        tag: "job-3",
    },
    {
        title: "Atelier verantwoordelijke",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/atelier-verantwoordelijke/",
        tag: "job-2",
    },
    {
        title: "Calculator schrijnwerkerij",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/calculator-schrijnwerkerij/",
        tag: "job-3",
    },
    {
        title: "Projectleider bouw",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/vacatures/projectleider-bouw/",
        tag: "job-1",
    },
    // {
    //     title: "Bouwvakker met ervaring in xyz",
    //     img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
    //     link: "/vacatures/template/",
    //     tag: "job-1",
    // },
];

// <span class="tag">${item.tag}</span> | 

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