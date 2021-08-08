const archiveGrid = document.getElementById("archive-grid");

function addTags(arr) {
    let tagHTML = '';
    let tags = arr;
    tags.forEach( element => {
        tagHTML += `<li>${element}</li>`;
    })
    return tagHTML;
}

function buildCube(element, index) {
    let tagHTML = addTags(element.tags.split(' '));

    let html = `
        <div class="archive-cube">

            <div class="archive-inner-face archive-inner-front"></div>
            <div class="archive-inner-face archive-inner-back"></div>
            <div class="archive-inner-face archive-inner-bottom"></div>
            <div class="archive-inner-face archive-inner-top"></div>
            <div class="archive-inner-face archive-inner-left"></div>
            <div class="archive-inner-face archive-inner-right"></div>

            <div class="archive-cube-face archive-cube-front">
                <a href="#archive-header" class="project-button" data-index="${index}">
                    ${element.name}
                </a>
            </div>
            <div class="archive-cube-face archive-cube-back"></div>
            <div class="archive-cube-face archive-cube-bottom">
                <p class="project-year">${element.year}</p>
            </div>
            <div class="archive-cube-face archive-cube-top"></div>
            <div class="archive-cube-face archive-cube-left"></div>
            <div class="archive-cube-face archive-cube-right">
                <ul class="cube-tags">
                    ${tagHTML}
                </ul>
            </div>
        </div>
    `
    return html;
}

function appendCube(parent, html) {
    parent.innerHTML += html;
    html = '';
}

function addDescription(html, index) {
    let project = projects[index];
    let descHTML = 
    html +
    `
        <div class="project-details">
            <h3>${project.name}</h3>
            <p>${project.year}</p>
            <p>${project.description}</p>
        </div>
        <div class="site-buttons">
            <a href="${project.siteLink}" class="project-button buffer" target="blank">SITE</a>
            <a href="${project.codeLink}" class="project-button buffer" target="blank">REPO</a>
        </div>
    `;
    return descHTML
}

// ADD ALL PROJECT CUBES

projects.forEach((elem, ind) => {
    appendCube(archiveGrid, buildCube(elem, ind));
})

// MAKE HIGHLIGHT FEATURE

const highlight = document.getElementById("selected"); // breaks if moved above projects.forEach

let highlightIndex = 0;

if (localStorage.getItem("highlightIndex")) { highlightIndex = parseInt(localStorage.getItem("highlightIndex")) };

highlight.innerHTML = addDescription(buildCube(projects[highlightIndex], highlightIndex), highlightIndex);

archiveGrid.addEventListener("click", (e) => {
    if (e.target.className === "project-button") {
        const ind = parseInt(e.target.getAttribute('data-index'));
        const proj = projects[ind];

        highlight.innerHTML = addDescription(buildCube(proj, ind), ind);
    }
})