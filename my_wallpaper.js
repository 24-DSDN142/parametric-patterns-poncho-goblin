//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let eyex = 0;
let eyey = 0;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0; // Offset between grids
}

function wallpaper_background() {
  background(165, 75, 165); // warm purple 
  // background(165, 75, 165); // warm purple 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  noFill();
  strokeWeight (50);
  stroke (80, 25, 80); // Dark Purple
  beginShape ();
  curveVertex (200,200);
  curveVertex (-25,-25)
  curveVertex (200,200)
  curveVertex(0,0)
  endShape ();

// Make me pretty // Curvy Lines
noFill();
strokeWeight (50);
stroke (100, 45, 100); // Dark Purple

  
// This kind works like placing poles in the negative space in order to inform how the line curves
beginShape ();
//First Control Point
curveVertex (-400,-400); // Very high up, Very Far Left. (Kill your landlord)
// Anchor Points
curveVertex(200,-25);
curveVertex(0,225);
//Secound Control Point
curveVertex(600,600); // Very low down, Very Far Right. (Something Awful)
//End me
endShape ();

// Mouth populate with a ring of circles somehow
// noStroke();
// fill(255)
// ellipse(100,0, 50, 65);

// I love push pop!!! / The Eyeball Zone

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(0,0) // Where am i?
  scale(0.55) // It's honna be 'uge
  rotate(0) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function 
  translate(100,100) // Where am i?
  scale(0.75) // It's honna be 'uge
  rotate(0) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

// Angled Eyeballs

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
  translate(55,35) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(315) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
  translate(145,35) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
  translate(145,165) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(315) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers // Draws an eyeball using draweye Function
  translate(55,165) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
 pop()
}

function draweye(eyex,eyey){ // reducing to a variable allows it to be different in each instance.
  fill(30);
  noStroke();
  beginShape();   // Black Around the Eye
  vertex(eyex-50,eyey) // 75 75 is the 'westmost' point of the eye, and its origin.
  quadraticVertex(eyex,eyey-45, eyex+45,eyey) // 100, 50 is the 'northmost', 125, 75 is the 'eastmost pole' 
  quadraticVertex(eyex,eyey+45, eyex-50,eyey) // 100, 100 is the 'southmost' pole. and 75, 75 returns us to the 'westmost' origin. 
  endShape(CLOSE); // This shape is drawn using quadraticVertexes. They work a bit like the pen tool in Illustrator. The line is pulled toward defined poles.

  // beginShape();

  // vertex(eyex-25, eyey-25);
  // vertex(eyex-55,eyey-50);
  // vertex(eyex-50, eyey-10);
  // vertex(eyex-75, eyey);
  // vertex(eyex-75, eyey);
  // vertex(eyex-25, eyey+25);
  // vertex(eyex+25, eyey+25);
  // vertex(eyex+50,eyey);
  // vertex(eyex+25, eyey-25);
  // vertex(eyex-25, eyey-25);
  // endShape();

 fill(215); 
 //ellipse(100, 75, 50, 35);

 beginShape() // White of the eye
 vertex(eyex-40,eyey) // 75 75 is the 'westmost' point of the eye, and its origin.
 quadraticVertex(eyex,eyey-25, eyex+35,eyey) // 100, 50 is the 'northmost', 125, 75 is the 'eastmost pole' 
 quadraticVertex(eyex,eyey+25, eyex-40,eyey) // 100, 100 is the 'southmost' pole. and 75, 75 returns us to the 'westmost' origin. 
 endShape(CLOSE) // This shape is drawn using quadraticVertexes. They work a bit like the pen tool in Illustrator. The line is pulled toward defined poles.

 fill(185, 185, 15); // Yella

 ellipse(eyex,eyey, 20, 20);

 fill(5);
 ellipse(eyex,eyey, 5, 5);


}