//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let eyex; // 
let eyey; //
// var wiggle = -25 // changes shape of the lines // tends to work better being increased, rather then decreased // -25
// var wobble = 0// changes the shape of the lines // tends to work better being increased, rather then decreased // 0
var EyeOutlineX = 50 // Min = 45 to be visible // Controls the width of the outline, increase by about 10 or so for a more 'feminine' look
var EyeOutlineY = 40 // Min = 30 to be visibile // Controls the height of the outline. // 
var EyeSquint = 40 // How wide the eye is // Beyond about 50 ~ stops looking like an eye. // smaller = squinting more
let IrisY = EyeSquint-1 // Controls the Length of the Iris
let EyeOrientation; 
let Orientation = 2 // For storing 'large loudouts' 
let EyeType = 2 // 1 = Human pupil, 2 = Snake Pupil
let PupilLength; // does nothing on its own, used to cap the length of the pupil as part of the DrawEye Function
let PupilColor;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0; // Offset between grids
}

function wallpaper_background() {
  let wallpaper = color(210,150,0)
  background(wallpaper); // warm purple 
  // background(165, 75, 165); // warm purple 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  let wallpaper2 = color(15, 15, 15);
  let tlbr = color(190,190,150);
  let trbl = color(0,0,0);
  
  function draweye(eyex,eyey){ // reducing to a variable allows it to be different in each instance.

    let iriscolor = color (30,30,30)
    let eyeoutlinecolor = color(15, 15, 15)
    let eyewhitecolor =  color(210,150,0)
    let PupilColor = color(210,150,0)

    // Paste Up to here!
  
    fill(eyeoutlinecolor); 
    noStroke();
    beginShape();   // color Around the Eye
    vertex(eyex-EyeOutlineX,eyey) // 75 75 is the 'westmost' point of the eye, and its origin.
    quadraticVertex(eyex,eyey-EyeOutlineY, eyex+EyeOutlineX-5,eyey) // 100, 50 is the 'northmost', 125, 75 is the 'eastmost pole' 
    quadraticVertex(eyex,eyey+EyeOutlineY, eyex-EyeOutlineX,eyey) // 100, 100 is the 'southmost' pole. and 75, 75 returns us to the 'westmost' origin. 
    endShape(CLOSE); // This shape is drawn using quadraticVertexes. They work a bit like the pen tool in Illustrator. The line is pulled toward defined poles.
  
   fill(eyewhitecolor); 
   //ellipse(100, 75, 50, 35);
  
   beginShape() // White of the eye
   vertex(eyex-40,eyey) // 75 75 is the 'westmost' point of the eye, and its origin.
   quadraticVertex(eyex,eyey-EyeSquint, eyex+35,eyey) // 100, 50 is the 'northmost', 125, 75 is the 'eastmost pole' 
   quadraticVertex(eyex,eyey+EyeSquint, eyex-40,eyey) // 100, 100 is the 'southmost' pole. and 75, 75 returns us to the 'westmost' origin. 
   endShape(CLOSE) // This shape is drawn using quadraticVertexes. They work a bit like the pen tool in Illustrator. The line is pulled toward defined poles.
  
  
   fill(iriscolor); // Yella
  
   ellipse(eyex,eyey, 20, IrisY);
  
   if (EyeType == 1){
    PupilLength = 5
   }
    
   if (EyeType == 2){
    PupilLength = EyeSquint+1
   }

   if(PupilLength > 20){
    PupilLength = 20
   }

  
  
   fill(PupilColor);
   ellipse(eyex,eyey, 5, PupilLength);
   
   if(EyeSquint > 20) { // Has the iris remain the same size if the eye opens further then 'deafult' 
    IrisY = 20
   }
    
   }

   fill(wallpaper2);
   strokeWeight (10);
   noStroke (255);
   
   triangle(100,100, 0,0, 200,0)
   triangle(100,100, 0,200, 200,200)

  if (Orientation == 1){

noFill(); // Creates the wavy lines. // Top left to bottom right
strokeWeight (15);
stroke (tlbr); // Dark Purple
beginShape ();
curveVertex(50,0)
curveVertex(50,0)
curveVertex(150,50)
curveVertex(50,100)
curveVertex(150,150)
curveVertex(50,200)
curveVertex(50,200)
endShape ();
// Make me pretty // Curvy Lines // Top right to Bottom Left 
noFill();
strokeWeight (15);
stroke (trbl); // 
// This kind works like placing poles in the negative space in order to inform how the line curves
beginShape ();
curveVertex(150,0)
curveVertex(150,0)
curveVertex(50,50)
curveVertex(150,100)
curveVertex(50,150)
curveVertex(150,200)
curveVertex(150,200)
endShape ();

push();  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
translate(100,200); // Where am i?
scale(0.3); // It's honna be 'uge
rotate(0); // Spin me right round
draweye(0,0); // keep me 0, 0. (translate handles position)
pop();

push();  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
translate(100,0); // Where am i?
scale(0.3); // It's honna be 'uge
rotate(0); // Spin me right round
draweye(0,0); // keep me 0, 0. (translate handles position)
pop();

// Big Eyeballs

  // push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  // translate(50,0) // Where am i?
  // scale(0.55) // It's honna be 'uge
  // rotate(0) // Spin me right round
  // draweye(0,0) // keep me 0, 0. (translate handles position)
  // pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(100,100) // Where am i?
  scale(0.85) // It's honna be 'uge
  rotate(0) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()


  } else if (Orientation == 2) {
  noFill(); // Creates the wavy lines. // Top left to bottom right
  strokeWeight (25);
  stroke (tlbr); // Dark Purple
  beginShape ();
  endShape ();
  // Make me pretty // Curvy Lines // Top right to Bottom Left 
  noFill();
  strokeWeight (15);
  stroke (trbl); // 
  // This kind works like placing poles in the negative space in order to inform how the line curves
  
  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(100,0) // Where am i?
  scale(1.25) // It's honna be 'uge
  rotate(135) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(40,60) // Where am i?
  scale(0.5) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(160,140) // Where am i?
  scale(0.5) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

 curve(0,0,0,0,100,100,800,-100)
 curve(200,200,200,200,100,100,-600,300)

 line(200,0,0,200)

  } else if (Orientation == 3) {

noFill();
strokeWeight (50);
stroke (tlbr); // Dark Purple
beginShape ();
curveVertex (200,200);
curveVertex (-25,-25)
curveVertex (200,200)
curveVertex(0,0)
endShape ();
  
// Make me pretty // Curvy Lines
noFill();
strokeWeight (50);
stroke (trbl); // Dark Purple

beginShape();
//First Control Point
curveVertex (-400,-400); // Very high up, Very Far Left. 
// Anchor Points
curveVertex(200,-25);
curveVertex(0,225);
//Secound Control Point
curveVertex(600,600); // Very low down, Very Far Right. 
endShape();

push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
translate(100,0) // Where am i?
scale(1) // It's honna be 'uge
rotate(0) // Spin me right round
draweye(0,0) // keep me 0, 0. (translate handles position)
pop()

push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
translate(0,100) // Where am i?
scale(0.65) // It's honna be 'uge
rotate(0) // Spin me right round
draweye(0,0) // keep me 0, 0. (translate handles position)
pop()

// push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
// translate(200,105) // Where am i?
// scale(0.65) // It's honna be 'uge
// rotate(0) // Spin me right round
// draweye(0,0) // keep me 0, 0. (translate handles position)
// pop()


  }

}

