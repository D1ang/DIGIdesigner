var canvas = new fabric.Canvas('canvas');

//Grabs the Hex colour code from the option form and transforms the fill of the .svg file to the proper colour
function colour() {
	var colourOption = document.getElementById('colourSelect');
	var i = colourOption.selectedIndex;

	document.getElementById('shirt--inject-1').style.fill = document.getElementsByTagName('option')[i].value;
}

//Image Loader to load a .png file on the canvas.
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
	var reader = new FileReader();
	reader.onload = function(event) {
		var img = new Image();
		img.onload = function() {
			var imgInstance = new fabric.Image(img, {
				scaleX: 0.08,
				scaleY: 0.08,
				left: 183,
				top: 145
			});
			canvas.add(imgInstance);
		};
		img.src = event.target.result;
	};
	reader.readAsDataURL(e.target.files[0]);
}
