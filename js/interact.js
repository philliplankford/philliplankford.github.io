// EXPERIMENTAL

//const box = element.getBoundingClientRect();
// box.top box.right box.bottom box.left;

// let LastKnownScrollPosition = 0; 
// let ticking = false;

// function doSomething(scrollPos) {
//     // Do something with the scroll position
//   }
  
//   document.addEventListener('scroll', function(e) {
//     lastKnownScrollPosition = window.scrollY;
  
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         doSomething(lastKnownScrollPosition);
//         ticking = false;
//       });
  
//       ticking = true;
//     }
//   });

// Make the DIV element draggable:
const allCubes = document.querySelectorAll('.project');

// allCubes.forEach(element => dragElement(element));

dragElement(document.querySelector(".showcase-one"));
// dragElement(document.querySelector(".showcase-two"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
//   }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}