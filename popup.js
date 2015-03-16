var curImg = 2;
var imagesArray = new Array();


function rotateImages() {
	document.getElementById("slideshow").setAttribute("src", "images/"+curImg+".jpg");
	curImg = (curImg < 20) ? curImg+1 : 1;
}

function main() {
	setInterval("rotateImages()", 4000);
}

window.onload = main();


