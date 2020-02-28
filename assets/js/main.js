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

var garmentsAndBrands = {};
garmentsAndBrands[''] = [ 'Select a brand' ];
garmentsAndBrands['shirt'] = [ 'Select a brand', 'Nike', 'Asics' ];
garmentsAndBrands['polo'] = [ 'Select a brand', 'Nike', 'Asics', 'Humel' ];
garmentsAndBrands['hoody'] = [ 'Select a brand', 'Nike' ];

/* The following function is based on the Car selector from W3schools.com
It wil listen on a change in the first valuelist and created an array that wil be used for a second valuelist based on the selection from the first */

function garmentSelect() {
	var garmentList = document.getElementById('garment');
	var brandList = document.getElementById('brands');
	var selectGarment = garmentList.options[garmentList.selectedIndex].value;
	while (brandList.options.length) {
		brandList.remove(0);
	}
	var garments = garmentsAndBrands[selectGarment];
	if (garments) {
		var i;
		for (i = 0; i < garments.length; i++) {
			var garment = new Option(garments[i], i);
			brandList.options.add(garment);
		}
	}
}

function brandSelector() {
	document.getElementById('brands').src = 'assets/svg/asics-shirt.svg';
  SVGInject(document.querySelector('img.injectable'));
  return "Succes"
}

//Grabs the Hex colour code from the option form and transforms the fill of the .svg file to the proper colour
function colour() {
	var colourOption = document.getElementById('colourSelect');
	var i = colourOption.selectedIndex;

	document.getElementById('fill--inject-1').style.fill = document
		.getElementById('colourSelect')
		.getElementsByTagName('option')[i].value;
}


function disableElement() {
	document.getElementById('btn01').disabled = true;
}
