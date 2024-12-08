const projects = [
    {
        title: "Ahornenlaan Antwerpen",
        img: "/projecten/ahornenlaan-antwerpen/img/banner.jpg",
        link: "/projecten/ahornenlaan-antwerpen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Bankstraat Hombeek",
        img: "/projecten/bankstraat-hombeek/img/banner.jpg",
        link: "/projecten/bankstraat-hombeek/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Haantjeslei Antwerpen",
        img: "/projecten/haantjeslei-67-69-antwerpen/img/banner.jpg",
        link: "/projecten/haantjeslei-67-69-antwerpen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Haantjeslei Antwerpen",
        img: "/projecten/haantjeslei-116-antwerpen/img.banner.jpg",
        link: "/projecten/haantjeslei-116-antwerpen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Harmoniestraat Antwerpen",
        img: "/projecten/harmoniestraat-antwerpen/img/banner.jpg",
        link: "/projecten/harmoniestraat-antwerpen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Hoogboomsesteenweg Kapellen",
        img: "/projecten/hoogboomsesteenweg-kapellen/img/banner.jpg",
        link: "/projecten/hoogboomsesteenweg-kapellen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Kanaalstraat Lier",
        img: "/projecten/kanaalstraat-lier/img/banner.jpg",
        link: "/projecten/kanaalstraat-lier/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Kribbestraat Antwerpen",
        img: "/projecten/kribbestraat-antwerpen/img/banner.jpg",
        link: "/projecten/kribbestraat-antwerpen/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Maxburgdreef Hoogstraten",
        img: "/projecten/maxburgdreef-hoogstraten/img/banner.jpg",
        link: "/projecten/maxburgdreef-hoogstraten/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Michielsendreef Brasschaat",
        img: "/projecten/michielsendreef-brasschaat/img/banner.jpg",
        link: "/projecten/michielsendreef-brasschaat/",
        tag: "Totaalrenovatie",
    },
    {
        title: "Waterfordstraat Berchem",
        img: "/projecten/waterfordstraat-berchem/img/banner.jpg",
        link: "/projecten/waterfordstraat-berchem/",
        tag: "Totaalrenovatie",
    },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "Totaalrenovatie",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "Totaalrenovatie",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "Totaalrenovatie",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "Totaalrenovatie",
    // },
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