//Grabs the Hex colour code from the option form and transforms the fill of the .svg file to the proper colour
function colour() {
	var colourOption = document.getElementById('colourSelect');
	var i = colourOption.selectedIndex;

	document.getElementById('fill--inject-1').style.fill = document
		.getElementById('colourSelect')
		.getElementsByTagName('option')[i].value;
}

function brandSelector() {
	document.getElementById('brand').src = 'assets/svg/asics-shirt.svg';
	SVGInject(document.querySelector('img.injectable'));
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

var carsAndModels = {};
carsAndModels['VO'] = [ 'V70', 'XC60', 'XC90' ];
carsAndModels['VW'] = [ 'Golf', 'Polo', 'Scirocco', 'Touareg' ];
carsAndModels['BMW'] = [ 'M6', 'X5', 'Z3' ];

function ChangeCarList() {
	var carList = document.getElementById('car');
	var modelList = document.getElementById('carmodel');
	var selCar = carList.options[carList.selectedIndex].value;
	while (modelList.options.length) {
		modelList.remove(0);
	}
	var cars = carsAndModels[selCar];
	if (cars) {
		var i;
		for (i = 0; i < cars.length; i++) {
			var car = new Option(cars[i], i);
			modelList.options.add(car);
		}
	}
}

function disableElement() {
	document.getElementById('btn01').disabled = true;
}
