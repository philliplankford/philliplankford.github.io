
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
        <a class="project-button" data-index="${ind}">
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


let highlightIndex = 0;

if (localStorage.getItem("highlightIndex")) { highlightIndex = parseInt(localStorage.getItem("highlightIndex")) };

highlight.innerHTML =  `
    <div class="archive-cube rotate">

        <div class="archive-inner-face archive-inner-front"></div>
        <div class="archive-inner-face archive-inner-back"></div>
        <div class="archive-inner-face archive-inner-bottom"></div>
        <div class="archive-inner-face archive-inner-top"></div>
        <div class="archive-inner-face archive-inner-left"></div>
        <div class="archive-inner-face archive-inner-right"></div>


        <div class="archive-cube-face archive-cube-front" data-index="0">
            <a class="project-button" data-index="${highlightIndex}">
                ${projects[highlightIndex].name}
            </a>
        </div>
        <div class="archive-cube-face archive-cube-back"></div>
        <div class="archive-cube-face archive-cube-bottom">
            <p class="project-year">${projects[highlightIndex].year}</p>
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
        <h3>${projects[highlightIndex].name}</h3>
        <p>${projects[highlightIndex].year}</p>
        <p>${projects[highlightIndex].description}</p>
        </div>
        <div class="site-buttons">
        <a class="project-button">SITE</a>
        <a class="project-button">REPO</a>
    </div>

`

archiveGrid.addEventListener("click", (e) => {
    if (e.target.className === "project-button") {
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
                <a class="project-button" data-index="${ind}">
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