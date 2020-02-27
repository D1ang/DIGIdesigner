//Grabs the Hex colour code from the option form and transforms the fill of the .svg file to the proper colour
function colour() {
	var colourOption = document.getElementById('colourSelect');
	var i = colourOption.selectedIndex;

	document.getElementById('shirt--inject-1').style.fill = document.getElementsByTagName('option')[i].value;
}

var canvas = new fabric.Canvas('canvas');

//Image Loader to load a .png file on the canvas.
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
	var reader = new FileReader();
	reader.onload = function(event) {
		var img = new Image();
		img.onload = function() {
			var imgInstance = new fabric.Image(img, {
				scaleX: 0.08, //scaling the uploaded image to a nice starting point on the shirt
				scaleY: 0.08, //scaling the uploaded image to a nice starting point on the shirt
				left: 170,
				top: 145
			});
			canvas.add(imgInstance);
		};
		img.src = event.target.result;
	};
	reader.readAsDataURL(e.target.files[0]);
}

// Resize the canvas depending on the size of an element with jQuery: Carlos Sampaio Peredo
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
	canvas.setHeight(jQuery('#container').height());
	canvas.setWidth(jQuery('#container').width());
	canvas.renderAll();
}
resizeCanvas();
