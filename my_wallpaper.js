//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(75, 50, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  push()  // Isolates the function from other modifiers
  translate(100,100) // Where am i?
  scale(0.75) // It's honna be 'uge
  rotate(0) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers
  translate(55,35) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(315) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers
  translate(145,35) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers
  translate(145,165) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(315) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()

  push()  // Isolates the function from other modifiers
  translate(55,165) // Where am i?
  scale(0.35) // It's honna be 'uge
  rotate(45) // Spin me right round
  draweye(0,0) // keep me 0, 0. (translate handles position)
  pop()
}

function draweye(eyex,eyey){ // reducing to a variable allows it to be different in each instance.
  fill(30);

  beginShape()   // Black Around the Eye
  vertex(eyex-50,eyey) // 75 75 is the 'westmost' point of the eye, and its origin.
  quadraticVertex(eyex,eyey-45, eyex+45,eyey) // 100, 50 is the 'northmost', 125, 75 is the 'eastmost pole' 
  quadraticVertex(eyex,eyey+45, eyex-50,eyey) // 100, 100 is the 'southmost' pole. and 75, 75 returns us to the 'westmost' origin. 
  endShape(CLOSE) // This shape is drawn using quadraticVertexes. They work a bit like the pen tool in Illustrator. The line is pulled toward defined poles.

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

fill(30);

 ellipse(eyex,eyey, 5, 5)


}