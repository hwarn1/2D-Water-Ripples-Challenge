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
let dampening = 0.995;

function setup() {
  pixelDensity(1);
  createCanvas(600,400);
  //create background with columns and rows
  cols = width;
  rows = height;
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  var scene;
}

function scene0() {
  
  scene = 0;
  background(200);
  text("2D Water Ripples", 50, 100);
  text("Press the space bar to view the simulation", 50, 150);
  text("Press 'p' to change ripples colur to pink", 50, 180);
  
}


function scene1() {
  scene = 1
  //square pixels arranged in columns and rows
  loadPixels();
  //for every non-edge element, loop through:
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      current[x][y] = (
        previous[x-1][y] + 
        previous[x+1][y] +
        previous[x][y-1] + 
        previous[x][y+1]) / 1.999 - 
        current[x][y];
      current[x][y] = current[x][y] * dampening;
      let index = (x + y * cols) * 4
        if (keyIsPressed && keyCode === 80) {
        pixels[index + 0] = current[x][y];
        pixels[index + 1] = current[x][y+1];
        pixels[index + 2] = current[x][y-1];
        } else {
          pixels[index + 0] = current[x][y];
          pixels[index + 1] = current[x][y];
          pixels[index + 2] = current[x][y];
          }
    }
  }
  updatePixels();
  
  let temp = previous;
  previous = current;
  current = temp;
  }


function mouseClicked() {
  previous[mouseX][mouseY] = 600;
}

function draw() {

  scene1();
  
}
