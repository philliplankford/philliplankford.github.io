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
    <div class="archive-cube" data-index="${ind}">

    <div class="archive-inner-face archive-inner-front"></div>
    <div class="archive-inner-face archive-inner-back"></div>
    <div class="archive-inner-face archive-inner-bottom"></div>
    <div class="archive-inner-face archive-inner-top"></div>
    <div class="archive-inner-face archive-inner-left"></div>
    <div class="archive-inner-face archive-inner-right"></div>


    <div class="archive-cube-face archive-cube-front" data-index="${ind}">
        <a class="project-button">
            ${elem.name}
        </a>
    </div>
    <div class="archive-cube-face archive-cube-back"></div>
    <div class="archive-cube-face archive-cube-bottom">
        <p class="project-year">${elem.year}</p>
    </div>
    <div class="archive-cube-face archive-cube-top"></div>
    <div class="archive-cube-face archive-cube-left"></div>
    <div class="archive-cube-face archive-cube-right" data-index="${ind}">
        <ul class="cube-tags">
            <li>UNIQUE</li>
            <li>CRYPTO</li>
            <li>FARMING</li>
            <li>SIM</li>
        </ul>
    </div>
</div>
    `
})

archiveGrid.innerHTML += html;
const highlight = document.getElementById("selected");
const archiveFace = document.querySelector(".archive-cube-face");

highlight.innerHTML =  `
    <div class="archive-cube rotate" data-index="0">

        <div class="archive-inner-face archive-inner-front"></div>
        <div class="archive-inner-face archive-inner-back"></div>
        <div class="archive-inner-face archive-inner-bottom"></div>
        <div class="archive-inner-face archive-inner-top"></div>
        <div class="archive-inner-face archive-inner-left"></div>
        <div class="archive-inner-face archive-inner-right"></div>


        <div class="archive-cube-face archive-cube-front" data-index="0">
            <a class="project-button">
                ${projects[0].name}
            </a>
        </div>
        <div class="archive-cube-face archive-cube-back"></div>
        <div class="archive-cube-face archive-cube-bottom">
            <p class="project-year">${projects[0].year}</p>
        </div>
        <div class="archive-cube-face archive-cube-top"></div>
        <div class="archive-cube-face archive-cube-left"></div>
        <div class="archive-cube-face archive-cube-right">
            <ul class="cube-tags">
                <li>UNIQUE</li>
                <li>CRYPTO</li>
                <li>FARMING</li>
                <li>SIM</li>
            </ul>
        </div>
    </div>
    <div class="project-details">
        <h3>${projects[0].name}</h3>
        <p>${projects[0].year}</p>
        <p>${projects[0].description}</p>
        </div>
        <div class="site-buttons">
        <a class="project-button">SITE</a>
        <a class="project-button">REPO</a>
    </div>

`

archiveGrid.addEventListener("click", (e) => {
    if (e.target.className === "archive-cube-face archive-cube-front" || e.target.className === "archive-cube-face archive-cube-right") {
        const ind = parseInt(e.target.getAttribute('data-index'));
        const proj = projects[ind];
        highlight.innerHTML = `
            <div class="archive-cube rotate" data-index="${ind}">

            <div class="archive-inner-face archive-inner-front"></div>
            <div class="archive-inner-face archive-inner-back"></div>
            <div class="archive-inner-face archive-inner-bottom"></div>
            <div class="archive-inner-face archive-inner-top"></div>
            <div class="archive-inner-face archive-inner-left"></div>
            <div class="archive-inner-face archive-inner-right"></div>
        
        
            <div class="archive-cube-face archive-cube-front" data-index="${ind}">
                <a class="project-button">
                    ${proj.name}
                </a>
            </div>
            <div class="archive-cube-face archive-cube-back"></div>
            <div class="archive-cube-face archive-cube-bottom">
                <p class="project-year">${proj.year}</p>
            </div>
            <div class="archive-cube-face archive-cube-top"></div>
            <div class="archive-cube-face archive-cube-left"></div>
            <div class="archive-cube-face archive-cube-right">
                <ul class="cube-tags">
                    <li>UNIQUE</li>
                    <li>CRYPTO</li>
                    <li>FARMING</li>
                    <li>SIM</li>
                </ul>
            </div>
        </div>
        <div class="project-details">
            <h3>${proj.name}</h3>
            <p>${proj.year}</p>
            <p>${proj.description}</p>
        </div>
        <div class="site-buttons">
            <a class="project-button">SITE</a>
            <a class="project-button">REPO</a>
        </div>
        `
    }
})
/*
`
<div class="archive-cube data-index="${ind}">

    <div class="archive-inner-face archive-inner-front"></div>
    <div class="archive-inner-face archive-inner-back"></div>
    <div class="archive-inner-face archive-inner-bottom"></div>
    <div class="archive-inner-face archive-inner-top"></div>
    <div class="archive-inner-face archive-inner-left"></div>
    <div class="archive-inner-face archive-inner-right"></div>


    <div class="archive-cube-face cube-front">
        <a class="project-button">
            ${proj.name}
        </a>
    </div>
    <div class="archive-cube-face archive-cube-back"></div>
    <div class="archive-cube-face archive-cube-bottom">
        <p class="project-year">${proj.year}</p>
    </div>
    <div class="archive-cube-face archive-cube-top"></div>
    <div class="archive-cube-face archive-cube-left"></div>
    <div class="archive-cube-face archive-cube-right">
        <ul class="cube-tags">
            <li>UNIQUE</li>
            <li>CRYPTO</li>
            <li>FARMING</li>
            <li>SIM</li>
        </ul>
    </div>
</div>
`
*/

/* OLD ONE PLATE ARCHIVE
archiveGrid.addEventListener("click", (e) => {
    highlight.classList.remove('hide');
    if (e.target.className === "archive-face") {
        const ind = e.target.getAttribute('data-index');
        const proj = projects[ind];
        highlight.innerHTML = `
        <div class="archive-face" data-index="${ind}"> 
            <a class="project-button">${proj.name}</a>
        </div>
        <div class="project-details">
            <h3>${proj.name}</h3>
            <p>${proj.year}</p>
            <p>${proj.description}</p>
        </div>
        <div class="site-buttons">
            <a class="project-button">SITE</a>
            <a class="project-button">REPO</a>
        </div>
        `
    }
})


        <div class="archive-face" data-index="${ind}"> 
            <button class="project-button" type="button">${elem.name}</button>
*/