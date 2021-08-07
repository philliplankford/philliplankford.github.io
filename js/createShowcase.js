
const showcaseGrid = document.querySelector('.project-grid');

const showcase = [
    projects[0],
    projects[1],
    projects[2],
    projects[3]
];

let projHTML = '';

showcase.forEach(element => {

    let tagHTML = '';
    let tags = element.tags.split(' ');
    tags.forEach( elem => {
        tagHTML += `<li>${elem}</li>`;
    })

    projHTML += 
    `
    <div class="project">
        <div class="cube">

            <div class="inner-face inner-front"></div>
            <div class="inner-face inner-back"></div>
            <div class="inner-face inner-bottom"></div>
            <div class="inner-face inner-top"></div>
            <div class="inner-face inner-left"></div>
            <div class="inner-face inner-right"></div>
        
            <div class="cube-face cube-front">
                <a class="project-button">${element.name}
                    <div class="triangles">
                        <div class="triangle"></div>
                        <div class="triangle"></div>
                        <div class="triangle"></div>
                    </div>
                </a>
            </div>
            <div class="cube-face cube-back"></div>
            <div class="cube-face cube-bottom">
                <p class="project-year">${element.year}</p>
            </div>
            <div class="cube-face cube-top"></div>
            <div class="cube-face cube-left"></div>
            <div class="cube-face cube-right">
                <ul class="cube-tags">
                    ${tagHTML}
                </ul>
            </div>
        </div>
    
    </div>  
    `;
})

showcaseGrid.innerHTML = projHTML;