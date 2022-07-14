const fps = 60; // 60 frames/second

const cube = document.getElementById("cube"),
	statusContainer = document.getElementById("statusContainer");

let width,
	height,
	velocityX = 1, // 1 px/frame
	velocityY = 1, // 1 px/frame
	pause = true;

reset();

window.addEventListener("resize", reset, true);

setInterval(function() {
	if (pause) return;

	var rect = cube.getBoundingClientRect();

	var left = rect.x;
	var top = rect.y;

	if (left + rect.width >= width || left <= 0) {
		velocityX = -velocityX; // invert direction
		cube.style.fill = getRandomColor();
	}
	if (top + rect.height >= height || top <= 0) {
		velocityY = -velocityY; // invert direction
		// cube.style.fill = getRandomColor();
	}

	cube.style.left = rect.x + velocityX + "px";
	cube.style.top = rect.y + velocityY + "px";
}, 1000 / fps);

function reset() {
	width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

	pause =
		width <= cube.getBoundingClientRect().width ||
		height <= cube.getBoundingClientRect().height;

	cube.style.left = "1px";
	cube.style.top = "1px";
	// cube.style.fill = "#fff";
}

/*
const fps = 60;

const cube = document.getElementById("cube");

let width, height, velocityX = 1, velocityY = 1, pause = true;

reset();

window.addEventListener("resize", reset, true);

setInterval( function() {

    if (pause) return;

    let rect = cube.getBoundingClientRect();

    let left = rect.x;
    let top = rect.y;

    if (left + rect.width >= width || left <= 0) {
        velocityX = -velocityX;
    }

    if (top + rect.height >= height || top <= 0){
        velocityY = -velocityY;
    }

    cube.style.left = rect.x + velocityX + "px";
    cube.style.top = rect.y + velocityY + "px";

}, 1000 / fps);

function reset() {
    width = 
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    height = 
        window.innerHeight ||
        document.documentElement.clientHeight || 
        document.body.clientHeight;

    pause = 
        width <= cube.getBoundingClientRect().width ||
        height <= cube.getBoundingClientRect().height;

    cube.style.left = "1px";
    cube.style.top = "1px";
}

*/