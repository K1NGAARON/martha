const projects = [
    {
        title: "Project 1",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/bellegem/",
        tag: "filter-1",
    },
    {
        title: "Project 2",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/gistel/",
        tag: "filter-1",
    },
    {
        title: "Project 3",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/kortrijk/",
        tag: "filter-3",
    },
    {
        title: "Project 4",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/kruiskerke/",
        tag: "filter-2",
    },
    {
        title: "Project 5",
        img: "https://www.victorrenoveert.be/files/images/1200x780/victor-woning-moerbeke-waas-aug-2023-01_1.jpg",
        link: "/projecten/roeselare/",
        tag: "filter-3",
    },
];

function createCards(e) {
    const target = document.querySelector(".projects-wrapper");

    const cards = projects.map(item => {
        return `
            <div class="item card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                    <p>
                        ${item.body}
                    </p>
                    <a href="${item.url}" class="btn">
                        Lees meer
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.projects-wrapper .card').fadeOut();

    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.projects-wrapper .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});