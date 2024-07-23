function addProjects(e) {
    const projects = [
        {
            title: "Project Bellegem",
            img: "/projecten/bellegem/img/banner.jpg",
            link: "/projecten/bellegem/",
        },
        {
            title: "Project Gistel",
            img: "/projecten/gistel/img/banner.jpg",
            link: "/projecten/gistel/",
        },
        {
            title: "Project Kortrijk",
            img: "/projecten/kortrijk/img/banner.jpg",
            link: "/projecten/kortrijk/",
        },
        {
            title: "Project Kruiskerke",
            img: "/projecten/kruiskerke/img/banner.jpg",
            link: "/projecten/kruiskerke/",
        },
        {
            title: "Project Roeselare",
            img: "/projecten/roeselare/img/banner.jpg",
            link: "/projecten/roeselare/",
        },
        // {
        //     title: "Project Sint-Joris",
        //     img: "/projecten/img/sint-joris.jpg",
        //     link: "/projecten/project-voorbeeld/",
        // },
    ];

    const target = document.querySelector('#project-wrapper');

    if (!target) {
        return;
    }

    const cards = projects.map(item => {

        return `
            <a href="${item.link}" class="item-link">
                <div class="item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="content">
                        <h3>
                            ${item.title}
                        </h3>
                        <p class="read-more">
                            Lees meer
                        </p>
                    </div>
                    <div class="overlay"></div>
                </div>
            </a>
        `;
    }).join('');

    target.innerHTML = cards;
};

$(document).ready(addProjects);