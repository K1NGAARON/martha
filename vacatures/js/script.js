const projects = [
    {
        title: "All-round afwerking",
        img: "/vacatures/img/image-1.jpg",
        link: "/vacatures/all-round-afwerking/",
        tag: "job-3",
    },
    // {
    //     title: "Projectleider bouw",
    //     img: "/vacatures/img/image-4.jpg",
    //     link: "/vacatures/projectleider-bouw/",
    //     tag: "job-1",
    // },
    {
        title: "Medewerker schrijnwerkerij",
        img: "/vacatures/medewerker-schrijnwerkerij/img/banner.jpg",
        link: "/vacatures/medewerker-schrijnwerkerij/",
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