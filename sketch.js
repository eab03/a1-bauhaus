// lamp: circular pull
let circle1 = {
    x: 315,
    y: 560,
    radius: 10
};

// painting: width and height of diamonds
let diamondWidth = 15;
let diamondHeight = 15;

function setup() {
    let canvas = createCanvas(1024, 768);
    canvas.position(25, 200);
    canvas.parent('container');
    background(150);
    angleMode(DEGREES);
}

function draw() {
    // color variables
    let red = color(255, 0, 0);
    let yellow = color("#ffff00");
    let green = color(20, 83, 20);
    let ltblue = color(198, 226, 227, 75);
    let blue = color(0, 0, 255);

    let white = color(235);
    let silver = color("#C0C0C0");
    let dkgray = color(169, 169, 169);
    let gray = color(128, 128, 128);
    let customGray = color(25);
    let black = color(0);

    // PAINTING
    // canvas
    noStroke();
    fill(green);
    rect(640, 50, 280, 280);

    // diamonds
    // if hover near lamp pull, some of the diamonds will turn yellow
    var d = dist(mouseX, mouseY, circle1.x, circle1.y);
    if (d < circle1.radius + 15) {
        push();
        fill(yellow);
        translate(680, 70);
        rotate(45, 45);
        rect(0, 0, diamondWidth, diamondHeight);
        rect(220, -70, diamondWidth, diamondHeight);
        fill(red);
        rect(200, -50, diamondWidth, diamondHeight);
        fill(yellow);
        rect(150, 150, diamondWidth, diamondHeight);
        pop();
    } else {
        push();
        fill(red);
        translate(680, 70);
        rotate(45, 45);
        rect(0, 0, diamondWidth, diamondHeight);
        rect(220, -70, diamondWidth, diamondHeight);
        rect(200, -50, diamondWidth, diamondHeight);
        rect(157.5, 157.5, diamondWidth, diamondHeight);
        pop();
    }

    // fish
    fill(customGray);
    ellipse(825, 115, 80, 30); //top
    triangle(862.5, 115, 885, 100, 885, 130);

    ellipse(725, 185, 80, 30);
    triangle(762.5, 185, 785, 170, 785, 200); // middle

    ellipse(825, 265, 80, 30);
    triangle(862.5, 265, 885, 250, 885, 280); // bottom

    // eyes of fish
    fill(red);
    ellipse(800, 115, 5); // top
    ellipse(700, 185, 5); // middle
    ellipse(800, 265, 5); // bottom

    // TABLE
    // table top
    fill(50);
    quad(120, 600, 554, 600, 594, 764, 70, 764, 120, 600);
    fill(28);
    quad(72, 758, 592, 758, 594, 768, 70, 768, 72, 758);

    // CARD ON TABLE
    // white card
    fill(white);
    quad(430, 680, 520, 680, 540, 730, 410, 730, 430, 730);

    fill(black);
    triangle(485, 705, 510, 695, 510, 715);
    fill(black);
    ellipse(460, 705, 60, 20);
    fill(red);
    ellipse(445, 705, 3);

    // image of fish on the card
    // if hover over the painting, the fish eyes on the card turns yellow or blue
    // if hover near middle fish on painting, the other fish eyes turn yellow or blue

    if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 50) && (mouseY < 139)) {
        fill(blue); // top fish in painting
        ellipse(800, 115, 5);

        fill(blue); // fish on card
        ellipse(445, 705, 3);
    } else if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 140) && (mouseY < 214)) {
        fill(blue); // top fish in painting
        ellipse(800, 115, 5);

        fill(red); // middle fish in painting
        ellipse(700, 185, 5);

        fill(yellow); // bottom fish in painting
        ellipse(800, 265, 5);
    } else if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 215) && (mouseY < 290)) {
        fill(yellow); // bottom fish in painting
        ellipse(800, 265, 5);

        fill(yellow); // fish on card
        ellipse(445, 705, 3);
    } else { // otherwise nothing changes
    }

    // if hover over the card, one diamond in the painting turns blue
    if ((mouseX > 430) && (mouseX < 540) &&
        (mouseY > 680) && (mouseY < 730)) {
        push();
        fill(blue);
        translate(680, 70);
        rotate(45, 45);
        rect(200, -50, diamondWidth, diamondHeight);
        pop();
        fill(yellow);
        ellipse(700, 185, 5); // middle
    } else {}

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
    rect(256.5, 425, 40, 250, 4);

    fill(silver);
    rect(272, 430, 10, 230); // middle
    rect(256.5, 650, 40, 25); // bottom
    rect(256.5, 425, 40, 70); // top
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

    // if hover near the lamp pull, the top portion of the lamp shade turns yellow
    // as noted earlier, some of the diamonds in the painting will also turn yellow
    var d = dist(mouseX, mouseY, circle1.x, circle1.y);
    if (d < circle1.radius + 25) {
        fill(yellow);
        arc(276, 415, 225, 250, 180, 180, 180, OPEN);
    } else {
        fill(white);
        arc(276, 415, 225, 250, 180, 180, 180, OPEN);
    }

    // lamp pull
    stroke(gray);
    strokeWeight(.5);
    fill(silver);
    ellipse(307, 460, 15, 20);

    fill(gray);
    ellipse(307, 460, 5, 10);

    stroke(gray);
    strokeWeight(2);
    line(316, 465, 315, 560); // main line
    strokeWeight(3);
    line(308, 459, 315, 464); // smaller line

    strokeWeight(.5);
    fill(dkgray);
    ellipse(circle1.x, circle1.y, circle1.radius);

} // close function draw

// move the mouse near/away from the lamp pull to change the background color to black
function mouseMoved() {
    var d = dist(mouseX, mouseY, circle1.x, circle1.y);
    if (d < circle1.radius + 15) {
        background(0);
        noStroke();
    }
    ellipse(circle1.x, circle1.y, circle1.radius);
} // close function mouseMoved

// click on card to change the background color back to light gray
function mouseClicked() {
    if ((mouseX > 430) && (mouseX < 540) &&
        (mouseY > 680) && (mouseY < 730) && background(0)) {
        background(150);
    } else {
        background(0, 0, 255, 85);
    }
} // close function mouseClicked
