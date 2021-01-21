let rbutton = document.getElementById("button");
let baudio = document.getElementById("explaudio");

rbutton.addEventListener("mousedown", function(e) {
	rbutton.src="images/button-down.png";
	baudio.load();
});

rbutton.addEventListener("mouseup", function(e) {
	rbutton.src="images/button-up.png";
});