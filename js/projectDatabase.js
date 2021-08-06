projects = [

    {
        name: "digi-farm",
        year: "2021",
        tags: "unique crypto farming sim",
        description: "A unique crypto farming sim that uses api to fetch real time crypto prices players buy sell and hold plots of crypto",
        codeLink: "",
        siteLink: "",
        icon: ""
    },
    {
        name: "web app",
        year: "2021",
        tags: "unique crypto farming sim",
        description: "a mock up of a web app dashboard that displays many types of data",
        codeLink: "",
        siteLink: "",
        icon: ""
    },
    {
        name: "web app",
        year: "2021",
        tags: "unique crypto farming sim",
        description: "a mock up of a web app dashboard that displays many types of data",
        codeLink: "",
        siteLink: "",
        icon: ""
    },
    {
        name: "web app",
        year: "2021",
        tags: "unique crypto farming sim",
        description: "a mock up of a web app dashboard that displays many types of data",
        codeLink: "",
        siteLink: "",
        icon: ""
    },
    {
        name: "web app",
        year: "2021",
        tags: "unique crypto farming sim",
        description: "a mock up of a web app dashboard that displays many types of data",
        codeLink: "",
        siteLink: "",
        icon: ""
    },

];

const archiveGrid = document.getElementById("archive-grid");


let html = ``;

projects.forEach((elem, ind) => {
    html += `
        <div class="archive-face" data-index="${ind}"> 
            <button class="project-button" type="button">${elem.name}</button>
        </div>
    `
})

archiveGrid.innerHTML += html;

const highlight = document.getElementById("selected");
const archiveFace = document.querySelector(".archive-face");

archiveGrid.addEventListener("click", (e) => {
    highlight.classList.remove('hide');
    if (e.target.className === "archive-face") {
        const ind = e.target.getAttribute('data-index');
        const proj = projects[ind];
        highlight.innerHTML = `
        <div class="archive-face" data-index="${ind}"> 
            <button class="project-button" type="button">${proj.name}</button>
        </div>
        <div class="project-details">
            <h3>${proj.name}</h3>
            <p>${proj.year}</p>
            <p>${proj.description}</p>
        </div>
        <div class="site-buttons">
            <button class="project-button">Live Site</button>
            <button class="project-button">Code</button>
        </div>
        `
    }
})