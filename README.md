# DIGIdesigner
**Milestone project 2: Interactive Frontend Development - Code Institute**

For a silkscreen-press company a need for a design tool has been requested.
The main goal of the tool is to make the job of our studio employees easier and more efficient.
For the customer we would like to provide an easy to understand and easy to use tool
so, they will be able to make their own designs.

In short:
- A tool for employees to be more efficient.
- A easy to understand tool for customers to remove some workload from the studio employees.

## Demo
A live demo version can be found **[here](https://d1ang.github.io/DIGIdesigner/)**

![Design](https://github.com/D1ang/DIGIdesigner/blob/master/mockups/presentation.png)

## UX
To make the tool as clear as possible to the customers and employees a basic but very clean design has been chosen.
Options are minimalistic and the end-user won't be overloaded with options to choose from.
The form had been built up in a logic from top to bottom walk-trough.

## User stories
With years of field experience, we have built a well-known form and work ethic in creating designs.
We asked our customers from day to day what they would like to see in a sample and came up with the following points:

 - As a user, I want to see how my logo looks on a shirt (**tool**)
 - As a user, I want to know what a different colour of garment will do to my logo (**colour options**)
 - As a user, I want to send my design to the company for production (**send button**)
 - As an employee, I want to know how many designs will be ordered (**Quantity**)
 - As an employee, I want to know the size of the garment (**Select a size**)
 - As an employee, I would like to receive it by e-mail (**send button**)

### Strategy
The goal of the tool is to make it as easy as possible to access, short and informative,
while striving for a minimalist and user-friendly design as possible.

### Scope
For customers, we wanted to provide them with an easy to understand (first-view-use) tool.
This way, they would be able to create samples on their own, so our studio employees have more free time for other job-related tasks.

### Structure
The tool is structured to get the right information as quickly as possible.
The order of the options provided are placed from top to bottom while the design provided will be always visible
and gives the end-user a straight away no-nonsense feedback.

### Skeleton
By using Figma the following wireframes were created:

[Digidesigner wireframe](https://github.com/D1ang/DIGIdesigner/blob/master/mockups/wireframe.pdf)

[Responsive phone wireframe](https://github.com/D1ang/Digidesigner/blob/master/mockups/wireframe-sm.pdf)

### Surface
The colours are almost non-existent a very clean minimalist design has been chosen to force the attention to the provide design.
Users won't be scared or afraid to use the tool by this easy to understand design.
The font Montserrat had been chosen because of its light thin look that fits perfectly to the field outlines.
Al the buttons are outlined to fit the input fields.
Blue is the colour most commonly associated with harmony, faithfulness, confidence, and imagination.

## Technologies
1. HTML - *To create the basics*
2. CSS - *To improve placements and design*
3. Bootstrap - *To make the design, input fields and buttons responsive*
4. Figma - *To create a wireframe*
5. JavaScript - *The engine to create user interaction*
8. Font Awesome - *Easy icon access for the gender icons*

### JavaScript Libraries
1. jquery - *To improve inputfield feedback*
2. Fabric.js - *A Canvas Library that provides an interactive object model on top of canvas elements*
3. dom-to-image.js *Generates an image from a DOM node using HTML5 canvas*
4. FileSaver.js *An HTML5 FileSaver implementation for saving files on the client-side*

## Features
This tool creates input field options based on the chosen options by the end-user.
All the lists are viewable at first hand, but are disabled and greyed out and will be available when the user selects an option that will fill it up.
When selecting a gender, the garment list will be created for that specific gender.
When selecting a garment on the first input field a second input field will be created with the available brands for that garment.
When a brand is selected a new input field will be created with the available colours for that garment and brand.
When the colour is selected a command will be executed and the garment will be coloured right away on the screen.
A size can be selected for the garment and the quantity the user needs can be entered in a number field.
Finally, a logo can be uploaded to the garment and will be shown on the screen after upload.
While the logo will be properly sized, the end-user does have an option the resize it at will.
A modal will be shown explaining the options a user has to edit or delete the logo.
When the design is finshed it can be saved as a .jpeg or be send by e-mail to the company.
A reset button is provided to reset all the options and on smaller screens a delete button, to remove the selected logo.

### Features Left to Implement
In the future, we would like to add an API from cloud convert, so uploaded logo's can be converted to the proper format.
Also, we would like to add some animations to the tool to make a nicer user experience.

## Testing
All fields will function, but the send button will not send the design to an email address.
Custom CCS code is written for every button comfort design.

This site was tested across multiple screen sizes on Chrome, Safari and Internet Explorer.
To ensure compatibility and responsiveness it's also tested on an android based mobile device (OnePlus5).
When the webpage is visited on larger screens the shirt sample will be shown on the right side, but
will be placed on the bottom on smaller screens.

A .png file is provided named "dukes.png" in the mock-ups folder to test the upload feature.

The tool has been bug tested by customers and employees.
The choice for not using Jasmine has been made.
Jasmine is not easy to understand and won't give the understandable feedback that an end-user or employee active in the field can provide.

## Bugs:

### Fabric.js canvas responsive:
By using fabric.js with canvas responsiveness can be a bit tedious. This problem was easy to solve
by using a canvas size that is both big and small enough for every screen size.

### Styling a SVG:
Changing an SVG with CSS is problematic when the .svg code is not inline.
when external svg are used the svg won't be loaded in the DOM.
By using an object tag the svg can be styled and changed, but the page needs to be refreshed with every change.
A test was run with a second library (SVGInject), but the responsiveness was impossible to fix.
So, the choice for using png's as garment samples has been made. These are easily to manage and to load and can be coloured
By using a background id and CSS.

### SecurityError: Failed to read the 'cssRules'
The dom-to-image library creates a strange security error on the latest chrome version.
It's more of a warning and not a real error and it doesn't affect any usability of the code.

The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [JSHint](https://jshint.com/): A static code analysis tool for JavaScript.

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
For the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by entering
`git clone https://github.com/D1ang/DIGIdesigner.git` into your terminal.
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

When the code is downloaded as a .zip it can be unzipped and runned by opening the unzipped folder and then execute `index.html`
The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers.
When executed the main screen will be shown and the options can be chosen.

A .png file is provided named `dukes.png` in the mockups folder to test the upload and design feature.
The code can be uninstalled by removing the installed folder.

## Credits

### Content
All text content and input fields on this tool were written by me.
The company logo is created by me.

### Media
The garment designs are taken from the following site [Teespring](https://teespring.com/)
The gender icons are from Font Awesome.

### Acknowledgements

- Conditional value list [link](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_options3)
- Fabric.js [link](http://fabricjs.com/)
- W3schools.com [link](https://www.w3schools.com/)
- The following site [link](https://ourcodeworld.com/articles/read/1016/how-to-create-your-own-t-shirt-designer-using-fabricjs-in-javascript) was used as an inspiration for the creation of this tool.