# DIGIdesigner
**Milestone project 2: Interactive Frontend Development - Code Institute**

For a silkscreen-press company a need for a design tool has been requested.
The main goal of the tool is to make the job of our studio employees easier and more efficient.
For the customer we would like to provide an easy to understand and easy to use tool, 
so they will be able to make their own samples.

In short:
- A tool for employees to be more efficient.
- A tool for customers to remove some workload from the studio employees.

## Demo
A live demo version can be found **[here](https://d1ang.github.io/DIGIdesigner/)**

![Design](https://github.com/D1ang/DIGIdesigner/blob/master/mockups/presentation.png)

## UX
To make the tool as clear as possible to the customers and employees a basic but very clean design has been chosen.
Options are minimalistic and the end-user won't be overloaded with options to choose from.
The form had been built op in a logic from top to bottom walk-trough.

## User stories
With years of work experience, we have built a well-known form and work ethic in creating samples.
We asked our customers from day to day what they would like to see in a sample and came up with the following point:

 - As a user, I want to see how my sample looks on a shirt (**tool**)
 - As a user, I want to know what a different colour of fabric will do to my design (**colour options**)
 - As a user, I want to send my designed sample to the company for production (**send button**)
 - As an employee, I want to know how many designs will be ordered (**Quantity**)
 - As an employee, I want to know how the size of the order (**Select a size**)
 - As an employee, I would like to receive it by e-mail as most of the orders are there (**send button**)

### Strategy
The goal of the tool was to make it as easy as possible to access, short and informative,
while striving for a minimalist and user-friendly design as possible.

### Scope
For customers, we wanted to provide them with an easy to understand (first-view-use) tool.
This way, they would be able to create samples on their own, so our studio employees have more free time for other job-related tasks.

### Structure
The tool is structured to get the right information as quickly as possible.
The order of the options provided are placed from top to bottom while the sample provided will be always visible
and gives the end-user a straight away no-nonsense feedback.

### Skeleton
By using Figma the following wireframes were created:

[Digidesigner wireframe](https://github.com/D1ang/DIGIdesigner/blob/master/mockups/wireframe.pdf)

[Responsive phone wireframe](https://github.com/D1ang/Digidesigner/blob/master/mockups/wireframe-sm.pdf)

### Surface
The colours are almost non-existent a very clean minimalist design has been chosen to force the attention to the provide sample shirt
User won't be scared or afraid to use the tool by this easy to understand design.
The font Montserrat had been chosen because of its light thin look that fits perfectly to the field outlines.
Al the buttons are outlined to fit the input fields.

## Technologies
1. HTML - *To create the basics*
2. CSS - *To improve placements and design*
3. Bootstrap - *To make the iput fields and buttons responsive*
4. Figma - *To create a wireframe*
5. JavaScript - *The engine of the tool to create the user interaction*
8. FontAwesome - *Easy icon acces for the gender icons*

### JavaScript Libraries
1. jquery - *To improve inputfield feedback*
2. Fabric.js - *A Canvas Library that provides an interactive object model on top of canvas elements*
3. dom-to-image.js *Generates an image from a DOM node using HTML5 canvas*
4. FileSaver.js *An HTML5 FileSaver implementation for saving files on the client-side*


## Features
This tool creates input field options based on the chosen options by the end-user.
When selecting a garment on the first input field a second input field will be created with the available brands for that garment.
When a brand is selected a new input field will be filled with the available colour for that garment and brand.
When the colour is selected a command will be fired and the fabric will be coloured right away on the screen.
A size can be selected for the garment and the quantity the user needs can be file din in a number field.
Finally, a design can be uploaded to the garment and will be shown on the screen after upload.
While the design will be properly sized the end-user does have an option the resize it at will.
When finished the design can be saved as a jpeg or be send by mail to the company.


### Features Left to Implement
In the future, we would like to add an API from cloud convert so uploaded samples can be converted to the proper format.
Also, we would like to add some animations to the tool to make a nicer user experience.


## Testing
All fields will function, but the send button will not send the design to an email address.
Custom CCS code is written for every button comfort design.

This site was tested across multiple screen sizes on Chrome, Safari and Internet Explore
To ensure compatibility and responsiveness it was also tested on an android based mobile device (OnePlus5).
When the webpage is visited on larger screens the shirt sample will be shown on the right side.
This will be placed on the bottom on smaller screens.

A .png file is provided named "dukes.png" in the assets/img folder to test the upload feature.

The tool has been bug tested by customers and employees the choice for not using Jasmine has been made.
Jasmine is not easy to understand and won't give the understandable feedback that an end-user can provide.


## Bugs:

### Fabric.js canvas responsive:
By using fabric.js with canvas responsiveness can be a bit tedious. This problem was easy to solve
by using a canvas size that is both big and small enough for every screen size.

### Styling a SVG:
Changing an SVG with CSS is problematic when the .svg code is not inline.
when external svg are used the svg won't be loaded in the DOM.
By using an object tag the svg can be styled and changed, but the page needs to be refreshed with every change.
A test was run with a second library (SVGInject), but the responsiveness was impossible to fix.
So, the choice for using png's as garment sample has been made. These are easily to manage and to load.

### Reset input field on change:
The input fields won't change when an option on the input field before are changed.

The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
For the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting the link into your terminal.
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

A .png file is provided named "dukes.png" in the assets/img folder to test the upload and design feature.


## Credits

### Content
All text content and input fields on this tool were written by me.
The company logo is created by me in collaboration with Janneke van Soeren (IBS studio employee)

### Media
The garment designs are taken from the following site [Teespring](https://teespring.com/)

The gender icons are from Font Awesome.


### Acknowledgements

- Conditional value list [link](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_options3)
- Fabric.js [link](http://fabricjs.com/)
- W3schools.com [link](https://www.w3schools.com/)
- The following site [link](https://ourcodeworld.com/articles/read/1016/how-to-create-your-own-t-shirt-designer-using-fabricjs-in-javascript) was used as an inspiration for the creation of this tool.