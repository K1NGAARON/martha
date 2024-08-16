const projects = [
    {
        title: "Totaalrenovatie project regio Antwerpen",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/bellegem/",
        tag: "totaalrenovatie",
    },
    {
        title: "Totaalrenovatie project regio Antwerpen",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/gistel/",
        tag: "vloerwerken",
    },
    {
        title: "Totaalrenovatie project regio Antwerpen",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/kortrijk/",
        tag: "dakwerken",
    },
    {
        title: "Totaalrenovatie project regio Antwerpen",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/kruiskerke/",
        tag: "dakwerken",
    },
    {
        title: "Totaalrenovatie project regio Antwerpen",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/roeselare/",
        tag: "totaalrenovatie",
    },
];

function createCards(e) {
    const target = document.querySelector(".projects-wrapper");

    const cards = projects.map(item => {
        return `
            <a class="project ${item.tag}" href="${item.url}">
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