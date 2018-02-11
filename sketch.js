// variables for the light pull
let pullHeight = 95; // string

let circle1 = {
  // circular pull
  x: 315,
  y: 560,
  radius: 10
};

// width and height of diamonds in the painting
let diamondWidth = 15;
let diamondHeight = 15;

let r, g, b;

function setup() {
  createCanvas(1024, 768);
  background(150);
  angleMode(DEGREES);
}

function draw() {
  // color variables
  let black = color(0, 0, 0);
  let green = color(20, 83, 20);
  let red = color(255, 0, 0);
  let white = color(235);
  let yellow = color("#ffff00");
  let silver = color("#C0C0C0");
  let ltblue = color(198, 226, 227, 75);
  let dkgray = color(169, 169, 169);
  let gray = color(128, 128, 128);
  let blue = color(0, 0, 255);
  let customGray = color(25, 25, 25);

  // painting in the upper right corner
  noStroke();
  fill(green);
  rect(640, 50, 280, 280);

  // diamonds
  push();
  fill(red);
  translate(680, 70);
  rotate(45, 45);
  rect(0, 0, diamondWidth, diamondHeight);
  rect(220, -70, diamondWidth, diamondHeight);
  rect(200, -50, diamondWidth, diamondHeight);
  rect(150, 150, diamondWidth, diamondHeight);
  pop();

  // fish
  fill(customGray);
  ellipse(825, 115, 80, 30);
  triangle(862.5, 115, 885, 100, 885, 130);

  ellipse(725, 185, 80, 30);
  triangle(762.5, 185, 785, 170, 785, 200);

  ellipse(825, 265, 80, 30);
  triangle(862.5, 265, 885, 250, 885, 280);

  // eyes of fish
  fill(red);
  ellipse(800, 115, 5);
  ellipse(700, 185, 5);
  ellipse(800, 265, 5);

  // table in the lower right corner
  fill(25, 25, 25);
  quad(120, 600, 554, 600, 594, 764, 70, 764, 120, 600);

  fill(white);
  quad(430, 700, 520, 700, 540, 750, 410, 750, 430, 750);

  /*push();

  fill(0, 0, 255, 70);
  ellipse(460, 725, 30);

  fill(255, 0, 0, 70);
  rect(460, 715, 30, 30);

  fill(255, 255, 0, 70);
  triangle(490, 705, 515, 740, 475, 740);
  pop();
  */

  fill(white);
  quad(430, 700, 520, 700, 540, 750, 410, 750, 430, 750);
  fill(black);
  ellipse(460, 725, 60, 20);
  triangle(485, 725, 510, 715, 510, 735);
  fill(red);
  ellipse(445, 725, 3);

  // LAMP
  // base
  fill(ltblue);
  ellipse(276, 685, 200, 90);
  ellipse(276, 678, 200, 74);

  ellipse(276, 673, 75, 35);
  ellipse(276, 670, 75, 25);

  // body
  strokeWeight(1);
  stroke(dkgray);
  fill(ltblue);
  rect(256.5, 425, 40, 250, 2.5);
  fill(silver);
  rect(272, 430, 10, 230); // bottom
  rect(256.5, 655, 40, 20); // top
  rect(256.5, 425, 40, 70);
  rect(252, 430, 48, 45);
  // decoration at top of body
  for (var y = 430; y <= 450; y += 2) {
    for (var x = 252; x <= 252; x++) {
      stroke(gray);
      fill(255, 140);
      rect(x, y, 48, 2);
    }
  }

  // lamp shade
  stroke(silver);
  fill(dkgray);
  arc(276, 430, 225, 250, 180, 180, 180, CHORD);
  fill(white);
  arc(276, 415, 225, 250, 180, 180, 180, OPEN);

  // pull
  fill(silver);
  ellipse(307, 460, 15, 20);
  fill(gray);
  ellipse(307, 460, 5, 10);

  strokeWeight(2);
  line(316, 465, 315, 560); // main line
  strokeWeight(3);
  line(308, 459, 315, 464); // smaller line

  ellipse(circle1.x, circle1.y, circle1.radius);

  // click on ellipse on pull to change color of the shade
  strokeWeight(1);
  var d = dist(mouseX, mouseY, circle1.x, circle1.y);
  if (d < circle1.radius) {
    background(black);
    noStroke();

    /*for (var y = 5; y <= 200; y += 10) {
      for (var x = 40; x <= 550; x += 200) {
        fill(red, yellow, blue);
        rect(x, y, 5, 5);
      }
    }
      for (var y = 5; y <= 200; y += 10) {
      for (var x = 60; x <= 550; x += 240) {
        fill(yellow);
        rect(x, y, 5, 5);
      }
    }
    for (var y = 5; y <= 200; y += 10) {
      for (var x = 80; x <= 550; x += 200) {
        fill(blue);
        rect(x, y, 5, 5);
      }
    }*/
  }
}
