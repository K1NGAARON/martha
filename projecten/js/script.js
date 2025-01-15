const projects = [
    {
        title: "AHOR/ 255",
        img: "/projecten/ahornenlaan-antwerpen/img/banner.jpg",
        link: "/projecten/ahornenlaan-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "BANK/ 009",
        img: "/projecten/bankstraat-hombeek/img/banner.jpg",
        link: "/projecten/bankstraat-hombeek/",
        tag: "renovatie",
    },
    {
        title: "HAAN/ 062",
        img: "/projecten/haantjeslei-67-69-antwerpen/img/banner.jpg",
        link: "/projecten/haantjeslei-67-69-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "HAAN/ 226",
        img: "/projecten/haantjeslei-116-antwerpen/img/banner.jpg",
        link: "/projecten/haantjeslei-116-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "HARM/ 163",
        img: "/projecten/harmoniestraat-antwerpen/img/banner.jpg",
        link: "/projecten/harmoniestraat-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "HOOG/ 227",
        img: "/projecten/hoogboomsesteenweg-kapellen/img/banner.jpg",
        link: "/projecten/hoogboomsesteenweg-kapellen/",
        tag: "nieuwbouw",
    },
    {
        title: "KANA/ 153",
        img: "/projecten/kanaalstraat-lier/img/banner.jpg",
        link: "/projecten/kanaalstraat-lier/",
        tag: "renovatie",
    },
    {
        title: "KRIB/ 151",
        img: "/projecten/kribbestraat-antwerpen/img/banner.jpg",
        link: "/projecten/kribbestraat-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "MAX/ 282",
        img: "/projecten/maxburgdreef-hoogstraten/img/banner.jpg",
        link: "/projecten/maxburgdreef-hoogstraten/",
        tag: "renovatie",
    },
    {
        title: "MICH/ 147",
        img: "/projecten/michielsendreef-brasschaat/img/banner.jpg",
        link: "/projecten/michielsendreef-brasschaat/",
        tag: "renovatie",
    },
    {
        title: "WATE/ 123",
        img: "/projecten/waterfordstraat-berchem/img/banner.jpg",
        link: "/projecten/waterfordstraat-berchem/",
        tag: "renovatie",
    },
    {
        title: "POPP/ 558",
        img: "/projecten/elewijt/img/banner.jpg",
        link: "/projecten/elewijt/",
        tag: "renovatie",
    },
    {
        title: "LUND/ 121",
        img: "/projecten/lundenstraat-deurne/img/banner.jpg",
        link: "/projecten/lundenstraat-deurne/",
        tag: "renovatie",
    },
    {
        title: "ARTH/ 198",
        img: "/projecten/arthur-goemarelei-antwerpen/img/banner.jpg",
        link: "/projecten/arthur-goemarelei-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "HOF/ 127",
        img: "/projecten/hof-ter-bekestraat-antwerpen/img/banner.jpg",
        link: "/projecten/hof-ter-bekestraat-antwerpen/",
        tag: "renovatie",
    },
    {
        title: "PROF/ 027",
        img: "/projecten/prof-piccardlaan-wilrijk/img/banner.jpg",
        link: "/projecten/prof-piccardlaan-wilrijk/",
        tag: "renovatie",
    },
    {
        title: "BERK/ 032",
        img: "/projecten/berkenlaan-wilrijk/img/banner.jpg",
        link: "/projecten/berkenlaan-wilrijk/",
        tag: "renovatie",
    },
    {
        title: "MARC/ 051",
        img: "/projecten/marcottedreef-kappelen/img/banner.jpg",
        link: "/projecten/marcottedreef-kappelen/",
        tag: "renovatie",
    },
    {
        title: "BAIL/ 058",
        img: "/projecten/b-latourlei-brasschaat/img/banner.jpg",
        link: "/projecten/b-latourlei-brasschaat/",
        tag: "renovatie",
    },
    {
        title: "STER/ 127",
        img: "/projecten/sterrelaan-wilrijk/img/banner.jpg",
        link: "/projecten/sterrelaan-wilrijk/",
        tag: "renovatie",
    },
    {
        title: "DORP/ 157",
        img: "/projecten/dorpstraat-vremde/img/banner.jpg",
        link: "/projecten/dorpstraat-vremde/",
        tag: "renovatie",
    },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
    // },
    // {
    //     title: "",
    //     img: "",
    //     link: "/projecten/template/",
    //     tag: "",
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