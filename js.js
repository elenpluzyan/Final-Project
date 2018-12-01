const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 1800;
canvas.height = 1152;
    // ctx.fillStyle.src= 'http://www.redcarpetsystems.com/wp-content/uploads/2014/05/fashion-runway-rental-redcarpetsystems-dot-com-01.jpg';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
$(document).ready(function(){
function ImageSwitcher(choices, i) {
	i = 0;
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
const hide_current_image = function() {
	if(choices){
		choices[i].style.visibility = "hidden";
		i += 1;
	}
}

const show_next_image = function() {
	if(choices){
		if(i == (choices.length)) {
			i = 0;
		}
		choices[i].style.visibility = "visible";
	}
}
}
let pants = $(".pant");
let shirts = $(".shirt");
// let background = $(".bg");

const shirt_picker = new ImageSwitcher(shirts);

document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };

const pants_picker = new ImageSwitcher(pants);

document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };

const bg_picker = new ImageSwitcher(background);

document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };

});

$("#shirt_button").click(function(){

$("#shirt-menu").css("visibility", "visible"); });

// const background = new Image();
// background.src = 'C:\Users\elenp\Desktop\Pics\empty-fashion-show-runway-stage-empty-fashion-runway-related-keywords-amp-suggestions-empty.jpg';
const  ModelOne = new Image();
ModelOne.src = 'img/Robot.png';

const ModelTwo = new Image();
ModelTwo.src = 'img/Human_body.png';

const ModelTree = new Image();
ModelTree.src = 'img/Low-Poly-HumanM-ale.png';