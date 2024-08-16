function addProjects(e) {
    const projects = [
        {
            title: "Project 1",
            img: "/projecten/bellegem/img/banner.jpg",
            link: "/projecten/bellegem/",
        },
        {
            title: "Project 2",
            img: "/projecten/gistel/img/banner.jpg",
            link: "/projecten/gistel/",
        },
        {
            title: "Project 3",
            img: "/projecten/kortrijk/img/banner.jpg",
            link: "/projecten/kortrijk/",
        },
        {
            title: "Project 4",
            img: "/projecten/kruiskerke/img/banner.jpg",
            link: "/projecten/kruiskerke/",
        },
        {
            title: "Project 5",
            img: "/projecten/roeselare/img/banner.jpg",
            link: "/projecten/roeselare/",
        },
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