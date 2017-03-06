
// x position variable
var xpos = 0;
var A = 2;
 
function setup() 
{
  // set canvas size
  createCanvas(1000, 500);
}
 
function draw() 
{

  //background(158, 244, 255);
  background(22, 124, 168);
  ellipseMode(CENTER);
    
  xpos = xpos + 2;
    
  if(xpos > width)
  {
    xpos = 0;
  }
    
  fill(20, 152, 194);
  noStroke(0);
  rect(0, 0, 200, 500)
    
  
  fill(21, 110, 148);
  noStroke(0);
  rect(400, 0, 200, 500)
  
  fill(21, 88, 117);
  noStroke(0);
  rect(600, 0, 200, 500)
  
  fill(20, 72, 94);
  noStroke(0);
  rect(800, 0, 200, 500)
  

    
    
  fill(215);
  stroke(0);
  ellipse(xpos, 80, 55, 40);	
    
  fill(255);
  stroke(0);
  ellipse(xpos, 85, 30, 40);
 
  fill(0);
  stroke(0);
  ellipse(xpos, 75, 10, 10);
    
  fill(154, 179, 116);
  stroke(0);
  ellipse(xpos, 100, 100, 40);  
    
  fill(15);
  noStroke();
  ellipse(xpos, 100, 60, 10);	
    
  fill(0);
  stroke(0);
  line((xpos - 50), 50, (xpos - 35), 85);
    
  fill(0);
  stroke(0);
  line((xpos + 50), 50, (xpos + 35), 85);
   
  if (mouseIsPressed)
      fill(255, 0, 0);
    else
      fill(205, 224, 76);
  stroke(0);
  ellipse((xpos-50), 50, 10, 10); 
  
  if (mouseIsPressed)
      fill(255, 0, 0);
    else
      fill(205, 224, 76);
  stroke(0);
  ellipse((xpos+50), 50, 10, 10); 
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos-50), 50, mouseX, mouseY);
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos+50), 50, mouseY, mouseX);
 
    
  fill(18, 115, 15);
  noStroke();
  rect(0,400,1000,200);
    
 if (mouseX>=mouseY){
   A=-A
 }
  
  fill(255);
  noStroke(0);
  ellipse((xpos*A), 400, 15, 15);
  ellipse(((xpos*A)-5), 400, 20, 15);
  ellipse(((xpos*A)+5), 400, 15, 20);
  ellipse(((xpos*A)), 395, 15, 20);
  ellipse(((xpos*A)+10), 400, 15, 20);
  ellipse(((xpos*A)+10), 395, 20, 15);
  ellipse(((xpos*A)+19), 390, 3, 3);
    
  fill(0);
  noStroke(0);
  ellipse(((xpos*A)+20), 387, 18, 10);
  ellipse(((xpos*A)+19), 383, 5, 12);
  ellipse(((xpos*A)+12), 385, 5, 12);
  ellipse(((xpos*A)+12), 415, 3, 18);
  ellipse(((xpos*A)-5), 415, 3, 18);
  
  fill(255);
  noStroke(0);
  ellipse(((xpos*A)+19), 387, 3, 3);
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos-50), 50, mouseX, mouseY);
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos+50), 50, mouseY, mouseX); 
 
}

