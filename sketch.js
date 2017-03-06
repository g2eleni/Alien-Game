
// x position variable
var xpos = 0;
var xpos2 = 0;
var A = 2;
var ypos = 400;
var B = 2;
 
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
    
  xpos = xpos + A;
    
  if(xpos > width)
  {
    A = -A;
  }
    
  if(xpos <= 0)
  {
    A = -A;
  }
  
  //body
    
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
  
//body
    
    
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
  
  //lasers heads
   
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
  
  //laser beams
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos-50), 50, mouseX, mouseY);
    
  fill(255);
  stroke(255, 0, 0);
  line((xpos+50), 50, mouseY, mouseX);
 
  fill(18, 115, 15);
  noStroke();
  rect(0,400,1000,200);
  
  
  
    
  if (mouseIsPressed){
  ypos = ypos - B;
  }
  
 
   xpos2 = xpos2 + B;
   
  if(xpos2 > 500)
  {
    B = -B;
  }
    
  if(xpos2 <= 0)
  {
    B = -B;
  }
  
  
  //body
  fill(255);
  noStroke(0);
  ellipse((xpos2*2), (ypos), 15, 15);
  ellipse(((xpos2*2)-5), (ypos), 20, 15);
  ellipse(((xpos2*2)+5), (ypos), 15, 20);
  ellipse(((xpos2*2)), (ypos-5), 15, 20);
  ellipse(((xpos2*2)+10), (ypos), 15, 20);
  ellipse(((xpos2*2)+10), (ypos-5), 20, 15);
  ellipse(((xpos2*2)+19), (ypos-10), 3, 3);
  
  //head and legs
  fill(0);
  noStroke(0);
  ellipse(((xpos2*2)+20), (ypos-13), 18, 10);
  ellipse(((xpos2*2)+19), (ypos-17), 5, 12);
  ellipse(((xpos2*2)+12), (ypos-15), 5, 12);
  ellipse(((xpos2*2)+12), (ypos+15), 3, 18);
  ellipse(((xpos2*2)-5), (ypos+15), 3, 18);
  
  fill(255);
  noStroke(0);
  ellipse(((xpos2*2)+19), (ypos-15), 3, 3);
    
}

