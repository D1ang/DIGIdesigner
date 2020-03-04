function svgReset() {
  document.getElementById('container').innerHTML = '';

  var img = new Image();
  img.src = 'assets/svg/empty-shirt.svg';
  document.getElementById('container').appendChild(img);
  img.id = 'shirt';
  img.classList.add('injectable');
}

var canvas = new fabric.Canvas('canvas');

//Image Loader to load a .png file on the canvas.
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
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

// Bootstrap Custom Forms - the name of the file appear on fileselect after upload.
$('.custom-file-input').on('change', function () {
  var fileName = $(this).val().split('\\').pop();
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
});

/* The following function is based on the Car selector from W3schools.com
It wil listen on a change in the first valuelist and created an array that wil be used for a second valuelist based on the selection from the first */
function garmentSelect() {
  var garmentsAndBrands = {};
  garmentsAndBrands[''] = ['Select a brand'];
  garmentsAndBrands['shirt'] = ['Select a brand', 'Asics', 'Craft', 'Nike'];
  garmentsAndBrands['polo'] = ['Select a brand', 'Asics', 'Craft'];
  garmentsAndBrands['hoody'] = ['Select a brand', 'Nike'];

  var garmentList = document.getElementById('garment');
  var brandsList = document.getElementById('brands');

  var selectGarment = garmentList.options[garmentList.selectedIndex].value;
  while (brandsList.options.length) {
    brandsList.remove(0);
  }
  var garments = garmentsAndBrands[selectGarment];
  if (garments) {
    var i;
    for (i = 0; i < garments.length; i++) {
      var garment = new Option(garments[i], i);
      brandsList.options.add(garment);
    }
  }

  svgReset();

  document.getElementById('shirt').src = 'assets/svg/' + 'empty-' + selectGarment + '.svg';
  SVGInject(document.querySelector('img.injectable'));
}

/* The following function is based on the Car selector from W3schools.com
It wil listen on a change in the first valuelist and created an array that wil be used for a second valuelist based on the selection from the first */
function colourSelect() {
  var BrandsAndColours = {};
  BrandsAndColours[''] = ['Select a colour'];
  BrandsAndColours['Asics'] = ['Select a colour', 'Red', 'Blue', 'Purple', 'Gray'];
  BrandsAndColours['Craft'] = ['Select a colour', 'Yellow', 'Brown', 'White'];
  BrandsAndColours['Nike'] = ['Select a colour', 'Brown', 'Lime', 'Teal', 'Green', 'Maroon'];

  var brandList = document.getElementById('brands');
  var colourList = document.getElementById('colour');

  var selectBrand = brandList.options[brandList.selectedIndex].text;
  while (colourList.options.length) {
    colourList.remove(0);
  }
  var colours = BrandsAndColours[selectBrand];
  if (colours) {
    var i;
    for (i = 0; i < colours.length; i++) {
      var colour = new Option(colours[i], i);
      colourList.options.add(colour);
    }
  }

  svgReset();

  var garmentList = document.getElementById('garment');
  var selectGarment = garmentList.options[garmentList.selectedIndex].value;

  document.getElementById('shirt').src = 'assets/svg/' + selectBrand.toLowerCase() + '-' + selectGarment + '.svg';
  SVGInject(document.querySelector('img.injectable'));
}

//Grabs colour from the valuelist and transforms the fill of the .svg file to the proper colour.
function activateColour() {
  var colourOption = document.getElementById('colour');
  var i = colourOption.selectedIndex;

  document.getElementById('fill').style.fill = document.getElementById('colour').getElementsByTagName('option')[
    i
  ].text;
}

//Changes the colour of the garment
document.getElementById('garment-color').addEventListener(
  'change',
  function () {
    document.getElementById('garment-div').style.backgroundColor = this.value;
  },
  false
);
