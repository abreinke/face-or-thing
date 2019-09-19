function setup(){
createCanvas(1000, 1000);
background(158,187,245)
}

function draw(){
stroke(239, 114, 25);
strokeWeight(40);
fill(191,167,111);
beginShape();
vertex(200, 100);
vertex(300, 100);
vertex(400, 200);
vertex(200, 400);
vertex(100, 400);
vertex(100, 200);
endShape(CLOSE);
  
noStroke();
fill(239, 114, 25);
beginShape();
vertex(400, 200);
vertex(300, 300);
vertex(300, 600);
vertex(400, 700);
vertex(600, 700);
vertex(700, 600);
vertex(700, 300);
vertex(600, 200);
endShape(CLOSE);

stroke(239,114,25);
strokeWeight(40);
fill(191,167,111);
beginShape();
vertex(600, 200);
vertex(700, 100);
vertex(800, 100);
vertex(900, 200);
vertex(900, 400);
vertex(800, 400);
vertex(600, 200);
endShape(CLOSE);
  
stroke(0, 0, 0);
strokeWeight(4);
fill(255, 255, 255);
smooth();
beginShape();
vertex(395, 350);
vertex(400, 320);
vertex(450, 320);
vertex(495, 360);
vertex(460, 380);
vertex(400, 370);
endShape(CLOSE);

stroke(0, 0, 0);
strokeWeight(4);
fill(255, 255, 255);
beginShape();
vertex(610, 350);
vertex(595, 320);
vertex(550, 320);
vertex(510, 360);
vertex(540, 380);
vertex(600, 370);
endShape(CLOSE);
  
stroke(192,72,0);
strokeWeight(8);
fill(0, 0, 0);
circle(450, 350, 25);
  
 
stroke(0, 0, 0);
strokeWeight(2);
fill(191,167,111);
triangle(400, 700, 600, 700, 500, 600);
  
 
stroke(192,72,0); 
strokeWeight(8);
fill(0, 0, 0);
circle(550, 350, 25);

noStroke();
fill(0, 0, 0);
circle(475, 645, 25);
  

  
noStroke();
fill(0, 0, 0);
circle(525, 645, 25); 
  
  
noStroke();
fill(239, 114, 25);
beginShape();
vertex(400, 700);
vertex(300, 1000);
vertex(700, 1000);
vertex(600, 700);
endShape(CLOSE);
}  

function drawEarOne(){
stroke(239, 114, 25);
strokeWeight(40);
fill(191,167,111);
beginShape();
vertex(200, 100);
vertex(300, 100);
vertex(400, 200);
vertex(200, 400);
vertex(100, 400);
vertex(100, 200);
endShape(CLOSE);
}

function drawFace(){
fill(239, 114, 25);
beginShape();
vertex(400, 200);
vertex(300, 300);
vertex(300, 600);
vertex(400, 700);
vertex(600, 700);
vertex(700, 600);
vertex(700, 300);
vertex(600, 200);
endShape(CLOSE);
}

function drawEarTwo(){
stroke(239,114,25);
strokeWeight(40);
fill(191,167,111);
beginShape();
vertex(600, 200);
vertex(700, 100);
vertex(800, 100);
vertex(900, 200);
vertex(900, 400);
vertex(800, 400);
vertex(600, 200);
endShape(CLOSE);
}

function drawPupilOne(){
stroke(0, 0, 0);
strokeWeight(2);
fill(0, 0, 0);
circle(450, 350, 20);
 }

function drawNose(){
stroke(0, 0, 0);
strokeWeight(2);
fill(191,167,111);
triangle(400, 700, 600, 700, 500, 600);
}

function drawPupilTwo(){
stroke(0, 0, 0); 
strokeWeight(2);
fill(0, 0, 0);
circle(550, 350, 20);
}

function drawNostrilOne(){
noStroke();
fill(0, 0, 0);
circle(475, 645, 25);
}

function drawNostrilTwo(){
noStroke();
fill(0, 0, 0);
circle(525, 645, 25); 
}

function drawNeck(){
noStroke();
fill(239, 114, 25);
beginShape();
vertex(400, 700);
vertex(300, 1000);
vertex(700, 1000);
vertex(600, 700);
endShape(CLOSE);
}

function drawEgg(){
noStroke();
fill(252,226,162);
ellipse(300, 200, 120, 100);  
}