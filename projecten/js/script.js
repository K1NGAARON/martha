const projects = [
    {
        title: "AHOR/ 255",
        img: "/projecten/ahor-255/img/banner.jpg",
        link: "/projecten/ahor-255",
        tag: ["renovatie"],
    },
    {
        title: "BANK/ 009",
        img: "/projecten/bank-009/img/banner.jpg",
        link: "/projecten/bank-009/",
        tag: ["renovatie"],
    },
    {
        title: "HAAN/ 062",
        img: "/projecten/haan-062/img/banner.jpg",
        link: "/projecten/haan-062/",
        tag: ["renovatie"],
    },
    {
        title: "HAAN/ 226",
        img: "/projecten/haan-226/img/banner.jpg",
        link: "/projecten/haan-226/",
        tag: ["renovatie"],
    },
    {
        title: "HARM/ 163",
        img: "/projecten/harm-163/img/banner.jpg",
        link: "/projecten/harm-163/",
        tag: ["renovatie"],
    },
    {
        title: "HOOG/ 227",
        img: "/projecten/hoog-227/img/banner.jpg",
        link: "/projecten/hoog-227/",
        tag: ["nieuwbouw"],
    },
    {
        title: "KANA/ 153",
        img: "/projecten/kana-153/img/banner.jpg",
        link: "/projecten/kana-153/",
        tag: ["renovatie"],
    },
    {
        title: "KRIB/ 151",
        img: "/projecten/krib-151/img/banner.jpg",
        link: "/projecten/krib-151/",
        tag: ["renovatie"],
    },
    {
        title: "MAX/ 282",
        img: "/projecten/max-282/img/banner.jpg",
        link: "/projecten/max-282/",
        tag: ["renovatie"],
    },
    {
        title: "MICH/ 147",
        img: "/projecten/mich-147/img/banner.jpg",
        link: "/projecten/mich-147/",
        tag: ["renovatie"],
    },
    {
        title: "WATE/ 123",
        img: "/projecten/wate-123/img/banner.jpg",
        link: "/projecten/wate-123/",
        tag: ["renovatie"],
    },
    {
        title: "POPP/ 558",
        img: "/projecten/popp-558/img/banner.jpg",
        link: "/projecten/popp-558/",
        tag: ["renovatie"],
    },
    {
        title: "LUND/ 121",
        img: "/projecten/lund-121/img/banner.jpg",
        link: "/projecten/lund-121/",
        tag: ["renovatie"],
    },
    {
        title: "ARTH/ 198",
        img: "/projecten/arth-198/img/banner.jpg",
        link: "/projecten/arth-198/",
        tag: ["renovatie"],
    },
    {
        title: "HOF/ 127",
        img: "/projecten/hof-127/img/banner.jpg",
        link: "/projecten/hof-127/",
        tag: ["renovatie"],
    },
    {
        title: "PROF/ 027",
        img: "/projecten/prof-027/img/banner.jpg",
        link: "/projecten/prof-027/",
        tag: ["renovatie"],
    },
    {
        title: "BERK/ 032",
        img: "/projecten/berk-032/img/banner.jpg",
        link: "/projecten/berk-032/",
        tag: ["renovatie"],
    },
    {
        title: "MARC/ 051",
        img: "/projecten/marc-051/img/banner.jpg",
        link: "/projecten/marc-051/",
        tag: ["renovatie"],
    },
    {
        title: "BAIL/ 058",
        img: "/projecten/bail-058/img/banner.jpg",
        link: "/projecten/bail-058/",
        tag: ["renovatie"],
    },
    {
        title: "STER/ 127",
        img: "/projecten/ster-127/img/banner.jpg",
        link: "/projecten/ster-127/",
        tag: ["renovatie", "maatmeubilair"],
    },
    {
        title: "DORP/ 157",
        img: "/projecten/dorp-157/img/banner.jpg",
        link: "/projecten/dorp-157/",
        tag: ["renovatie", "maatmeubilair"],
    },
    {
        title: "KONI/ 069",
        img: "/projecten/koni-069/img/banner.jpg",
        link: "/projecten/koni-069/",
        tag: ["renovatie", "maatmeubilair"],
    },
    {
        title: "PROV/ 160",
        img: "/projecten/prov-160/img/banner.jpg",
        link: "/projecten/prov-160/",
        tag: ["maatmeubiliar"],
    },
    {
        title: "TROY/ 046",
        img: "/projecten/troy-046/img/banner.jpg",
        link: "/projecten/troy-046/",
        tag: ["renovatie"],
    },
];


function createCards() {
    const target = document.querySelector(".projects-wrapper");

    const cards = projects.map(item => {
        return `
            <a class="project ${item.tag.join(' ')}" href="${item.link}">
                <div class="image-wrapper">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="content">
                    <p class="heading">
                        <span class="tag">${item.tag.join(', ')}</span> | 
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
        $(`.projects-wrapper .project`).filter(function() {
            const tag = $(this).attr('class').split(' ');
            return tag.includes(activeFilter);
        }).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});