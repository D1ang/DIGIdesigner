var canvas = new fabric.Canvas('canvas');

/*------------------------Image loader to load some artwork on the canvas------------------------*/

document.getElementById('imageLoader').addEventListener("change", function (e) {
  var reader = new FileReader();

  reader.onload = function (event) {
    var imgObj = new Image();
    imgObj.src = event.target.result;

    imgObj.onload = function () {
      var img = new fabric.Image(imgObj);

      img.scaleToHeight(180);
      img.scaleToWidth(180);
      canvas.centerObject(img);
      canvas.add(img);
      canvas.renderAll();
    };
  };

  // If the user selected a image, load it
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
  }
}, false);

/*---------------------Bootstrap Custom Forms: filename appears after upload---------------------*/

$('.custom-file-input').on('change', function () {
  var fileName = $(this).val().split('\\').pop();
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
});

/*--------------------------Resets the garment preview on field change--------------------------*/

function pngReset() {
  document.getElementById('garmentImage').src = 'assets/img/garment/empty-shirt.png'
}

/*------------------------------------Create brand valuelist-------------------------------------*/

/* The following function is based on the Car selector from W3schools.com
   It wil listen on a change in the first valuelist and created an array that
   wil be used for a second valuelist based on the selection from the first */

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

  pngReset();

  document.getElementById('garmentImage').src = 'assets/img/garment/' + 'empty-' + selectGarment + '.png';
}

/*------------------------------------Create colour valuelist------------------------------------*/

/* The following function is based on the Car selector from W3schools.com
   It wil listen on a change in the second valuelist and created an array that
   wil be used for a third valuelist based on the selection from the second */

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

  pngReset();

  var garmentList = document.getElementById('garment');
  var selectGarment = garmentList.options[garmentList.selectedIndex].value;

  //document.getElementById('garmentImage').src = 'assets/svg/' + selectBrand.toLowerCase() + '-' + selectGarment + '.svg';
  document.getElementById('garmentImage').src = 'assets/img/garment/' + 'empty-' + selectGarment + '.png';
}

/*---------------------------------------Colour activator----------------------------------------*/

/*Grabs colour from the valuelist and transforms the background
  of the .div begind the png file to the proper colour. */

function activateColour() {
  var colourOption = document.getElementById('colour');
  var i = colourOption.selectedIndex;
  document.getElementById('garment-div').style.backgroundColor = document.getElementById('colour').getElementsByTagName('option')[i].text;
}