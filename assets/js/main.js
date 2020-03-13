const canvas = new fabric.Canvas('canvas');

let selectedGender;

const genderConfigurations = {
  male: ['Select a garment', 'Shirts', 'Hoodies', 'Longsleeves'],
  female: ['Select a garment', 'Shirts', 'Hoodies']
};

const garmentsConfigurations = {
  Shirts: ['Select a brand', 'Asics', 'Craft', 'Nike'],
  Hoodies: ['Select a brand', 'Asics', 'Craft'],
  Longsleeves: ['Select a brand', 'Nike']
};

const brandsConfigurations = {
  Asics: ['Select a colour', 'White', 'Blue', 'Purple', 'Gray'],
  Craft: ['Select a colour', 'White', 'Brown', 'Yellow'],
  Nike: ['Select a colour', 'White', 'Lime', 'Teal', 'Green', 'Maroon']
};

/*------------------------Image loader to load some artwork on the canvas------------------------*/

document.getElementById('images').addEventListener('change', function (e) {
  let reader = new FileReader();

  reader.onload = function (event) {
    let imgObj = new Image();
    imgObj.src = event.target.result;

    imgObj.onload = function () {
      let img = new fabric.Image(imgObj);

      img.scaleToHeight(150);
      img.scaleToWidth(150);
      canvas.centerObject(img);
      canvas.add(img);
      canvas.renderAll();
    };
  };

  // If the user select an image, load it
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
    $('#Modal').modal();
  }
},
  false
);

/*---------------------Bootstrap Custom Forms: filename appears after upload---------------------*/

$('.custom-file-input').on('change', function () {
  let fileName = $(this).val().split('\\').pop();
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
});

/*-----------------------------------------Select Gender-----------------------------------------*/

function selectGender(gender) {
  selectedGender = gender;
  let garmentList = document.getElementById('garment');

  while (garmentList.options.length) {
    garmentList.remove(0);
  }
  let garments = genderConfigurations[selectedGender];
  if (garments) {
    for (let i = 0; i < garments.length; i++) {
      let selectedGender = new Option(garments[i], i);
      garmentList.options.add(selectedGender);
    }
  }

  //reset form elements
  resetBrandname = document.getElementById("brands");
  resetBrandname.options[resetBrandname.selectedIndex].text = 'Select a brand';

  resetColour = document.getElementById("colour");
  resetColour.options[resetColour.selectedIndex].text = 'Select a colour';

  document.getElementById('garment').disabled = false;
  document.getElementById('brands').disabled = true;
  document.getElementById('colour').disabled = true;

  //reset garment image and colour
  document.getElementById('garments').src = 'assets/img/garment/male-shirts.png';
  document.getElementById('garment-div').style.backgroundColor = 'white';
}

/*------------------------------------Create brand valuelist-------------------------------------*/

/* The following function is based on the Car selector from W3schools.com
   It wil listen on a change in the first valuelist and created an array that
   wil be used for a second valuelist based on the selection from the first */

function selectGarment() {
  let garmentsElements = document.getElementById('garment');
  let brandsList = document.getElementById('brands');

  let garment = garmentsElements.options[garmentsElements.selectedIndex].text;
  while (brandsList.options.length) {
    brandsList.remove(0);
  }
  let garments = garmentsConfigurations[garment];
  if (garments) {
    for (let i = 0; i < garments.length; i++) {
      let garment = new Option(garments[i], i);
      brandsList.options.add(garment);
    }
  }

  //reset form elements
  document.getElementById('brands').disabled = false;
  document.getElementById('colour').disabled = true;

  resetColour = document.getElementById("colour");
  resetColour.options[resetColour.selectedIndex].text = 'Select a colour';

  //reset garment image and colour
  document.getElementById('garments').src = 'assets/img/garment/' + selectedGender + '-' + garment.toLowerCase() + '.png';
  document.getElementById('garment-div').style.backgroundColor = 'white';
}

/*------------------------------------Create colour valuelist------------------------------------*/

/* The following function is based on the Car selector from W3schools.com
   It wil listen on a change in the second valuelist and created an array that
   wil be used for a third valuelist based on the selection from the second */

function selectBrand() {
  let brandElements = document.getElementById('brands');
  let colourList = document.getElementById('colour');

  let selectBrand = brandElements.options[brandElements.selectedIndex].text;
  while (colourList.options.length) {
    colourList.remove(0);
  }
  let colours = brandsConfigurations[selectBrand];
  if (colours) {
    for (let i = 0; i < colours.length; i++) {
      let colour = new Option(colours[i], i);
      colourList.options.add(colour);
    }
  }

  //reset form elements
  document.getElementById('colour').disabled = false;

  resetColour = document.getElementById("colour");
  resetColour.options[resetColour.selectedIndex].text = 'Select a colour';

  //reset garment image and colour
  document.getElementById('garment-div').style.backgroundColor = 'white';
}

/*---------------------------------------Colour activator----------------------------------------*/

/*Grabs colour from the valuelist and transforms the background
  of the .div behind the png file to the proper colour. */

function selectColour() {
  let colourOption = document.getElementById('colour');
  let i = colourOption.selectedIndex;
  document.getElementById('garment-div').style.backgroundColor = document.getElementById('colour').getElementsByTagName('option')[i].text;
}

/*----------------------------------------Download Image-----------------------------------------*/

function downloadImage() {
  domtoimage.toJpeg(document.getElementById('garment-div'), { quality: 0.95 }).then(function (dataUrl) {
    let link = document.createElement('a');
    link.download = 'sample.jpeg';
    link.href = dataUrl;
    link.click();
  });
}

/*------------------------------------DEL key to delete image------------------------------------*/

$('html').keyup(function(e){
  if(e.keyCode == 46) {
      deleteSelectedObjectsFromCanvas();
  }
});    

function deleteSelectedObjectsFromCanvas(){
let selection = canvas.getActiveObject();
if (selection.type === 'activeSelection') {
  selection.forEachObject(function(element) {
      canvas.remove(element);
  });
}
else{
  canvas.remove(selection);
}
canvas.discardActiveObject();
canvas.requestRenderAll();
}