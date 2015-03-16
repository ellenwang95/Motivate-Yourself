var curImg = 2;

function rotateImages() {
	document.getElementById("slideshow").setAttribute("src", "images/"+curImg+".jpg");
	curImg = (curImg < 20) ? curImg+1 : 1;
}

function handler() {
	rotateImages();
}

function main() {
	document.addEventListener('DOMContentLoaded', function() {
		document.getElementById("slideshow").addEventListener("click", handler);
	});
}

window.onload = main();

