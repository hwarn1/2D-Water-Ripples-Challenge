//https://www.youtube.com/watch?v=BZUdGqeOD0w&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=152
//https://github.com/CodingTrain/website/blob/main/CodingChallenges/CC_102_WaterRipples/P5/sketch.js


let cols;
let rows;
//two arrays of words (integers)
//one holds the current state of water
let current;
//one hold the previous state of water
let previous;

//some non-integer between 0 and 1
let damping = 0.995;

function setup() {
  pixelDensity(1);
  createCanvas(600,400);
  //create background with columns and rows
  cols = width;
  rows = height;
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}
var sceneNum = 0;
let pinkButton = false;
let blueButton = false;
let bowButton = false;

function scene0() {
  
  sceneNum = 0;
  background(0);
  //background(10, 150, 300);
  fill(10, 150, 300);
  textSize(30);
  text("2D Water Ripples", 175, 100);
  fill(200, 50, 150);
  textSize(15);
  text("Press the space bar to view the simulation", 150, 150);
  fill(100, 200, 100);
  text("Press 'r' to change suck the ripples back", 155, 200);
  fill(150, 50, 250);
  text("Press the space bar at any time to return to this page", 115, 250)
  
}

function pinkRips() {
  
  //for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * damping;
      let index = (x + y * cols) * 4
          pixels[index + 0] = current[x][y];
          pixels[index + 1] = current[x][y+1];
          pixels[index + 2] = current[x][y-1];
    }
  }
}

function blueRips() {
  
  //for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * damping;
      let index = (x + y * cols) * 4
          pixels[index + 0] = current[x][y+3];
          pixels[index + 1] = current[x][y];
          pixels[index + 2] = current[x][y];
    }
  }
}

function bowRips() {
  
  //for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * damping;
      let index = (x + y * cols) * 4
          pixels[index + 0] = current[x+1][y];
          pixels[index + 1] = current[x][y];
          pixels[index + 2] = current[x][y+1];
    }
  }
}

function whiteRips() {
  
  //for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * damping;
      let index = (x + y * cols) * 4
          pixels[index + 0] = current[x][y];
          pixels[index + 1] = current[x][y];
          pixels[index + 2] = current[x][y];
    }
  }
  
}

function scene1() {
  sceneNum = 1
  //square pixels arranged in columns and rows
  loadPixels();
  /*//for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * damping;
      let index = (x + y * cols) * 4
          pixels[index + 0] = current[x][y];
          pixels[index + 1] = current[x][y+1];
          pixels[index + 2] = current[x][y-1];
    }
  }*/
  if (pinkButton === true) {
    pinkRips();
  } else if (blueButton === true) {
    blueRips();
  } else if (bowButton === true) {
    bowRips();
  } else {
    whiteRips();
  }
  
  updatePixels();
  
  let temp = previous;
  previous = current;
  current = temp;
  
  //buttons
  fill(0);
  rect(7, 10, 60, 20);
  fill(255);
  text("Intensity", 10, 23);
  fill(0);
  rect(10, 30, 25, 25);
  fill(255);
  text("▲", 15, 45);
  fill(0);
  rect(10, 70, 25, 25);
  fill(255);
  text("▼", 15, 85);
  
  //pink
  fill(0);
  rect(width - 60, 5, 55, 20);
  fill(300, 150, 200);
  text("pink", width - 55, 20)
  
  //blue
  fill(0);
  rect(width - 60, 25, 55, 20);
  fill(300, 150, 200);
  text("blue", width - 55, 40)
  
  //bow
  fill(0);
  rect(width - 60, 45, 55, 20);
  fill(300, 150, 200);
  text("rainbow", width - 55, 60)
  
  //white
  fill(0);
  rect(width - 60, 65, 55, 20);
  fill(300, 150, 200);
  text("white", width - 55, 80)
  }



function keyPressed() {
  
  if (keyCode === 32 && sceneNum === 0) {
    sceneNum = 1;
  } else if (keyCode === 32 && sceneNum === 1) {
    sceneNum = 0;
  }
   if (keyCode === 82) {
      for (let x = 1; x < cols - 1; x++) {
        for (let y = 1; y < rows - 1; y++) {
          current[x][y] = (
            previous[x-1][y] + 
            previous[x+1][y] +
            previous[x][y-1] + 
            previous[x][y+1]) / 1.999 - 
            current[x][y];
          current[x][y] = current[x][y] * damping;
              let index = (x + y * cols) * 4
              pixels[index + 0] = current[x][y];
              pixels[index + 1] = current[x][y];
              pixels[index + 2] = current[x][y];
         }
      }
    }
}


function mouseDragged() {
  if (sceneNum === 1) {
    previous[mouseX][mouseY] = 600;
  }
}

function mouseClicked() {
  
  if (mouseX >= 10 && mouseX <= 30 && mouseY >= 35 && mouseY <= 50) {
    damping += 0.001;
  } else if (mouseX >= 10 && mouseX <= 30 && mouseY >= 75 && mouseY <= 90) {
    damping -= 0.005;
  }
  if (mouseX >= width - 60 && mouseX <= width - 10 && mouseY >= 5 && mouseY <= 25) {
    pinkButton = true;
    blueButton = false;
    bowButton = false;
  } if (mouseX >= width - 60 && mouseX <= width -10 && mouseY >= 25 && mouseY <= 45) {
    blueButton = true;
    pinkButton = false;
    bowButton = false;
  } if (mouseX >= width - 60 && mouseX <= width -10 && mouseY >= 45 && mouseY <= 65) {
    bowButton = true;
    pinkButton = false;
    blueButton = false;
  } if (mouseX >= width - 60 && mouseX <= width -10 && mouseY >= 65 && mouseY <= 85) {
    bowButton = false;
    pinkButton = false;
    blueButton = false;
  }
}

function draw() {

  if (sceneNum === 0) {
    scene0();
  }
  if (sceneNum === 1) {
    scene1();
  }
  //scene1();
}
