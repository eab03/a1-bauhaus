// First assignment for Creative Explorations on the Web

// LAMP
// circular pull
let circle1 = {
    x: 315,
    y: 560,
    radius: 10
};

// PAINTING
// middle fish
let triangle2 = { // tail
    x1: 762.5,
    x2: 785,
    x3: 785
};

let ellipse2 = { // body
    x: 725
}

let ellipseSm2 = { // eye
    x: 700
}

//width and height of diamonds
let diamondWidth = 15;
let diamondHeight = 15;

let r, g, b;

function setup() {
    let canvas = createCanvas(1024, 768);
    canvas.position(25, 650);
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

    let white = color(252,252,252);
    let silver = color("#C0C0C0");
    let dkgray = color(169, 169, 169);
    let gray = color(128, 128, 128);
    let customGray = color(25);
    let black = color(0);

    // TABLE
    // table top
    noStroke();
    fill(50);
    quad(120, 600, 554, 600, 594, 764, 70, 764, 120, 600);
    fill(28);
    quad(72, 758, 592, 758, 594, 768, 70, 768, 72, 758);

    // card
    fill(white);
    quad(430, 680, 520, 680, 540, 730, 410, 730, 430, 730);

    // image of fish on the card
    noStroke();
    fill(black);
    triangle(460, 705, 435, 695, 435, 715);
    fill(black);
    ellipse(485, 705, 60, 20);
    fill(red);
    ellipse(500, 705, 3);


    // LAMP
    // base
    fill(ltblue);
    ellipse(273, 685, 200, 90);
    ellipse(273, 678, 190, 72);

    ellipse(276, 673, 75, 35);
    ellipse(276, 670, 75, 25);

    // body
    strokeWeight(1);
    stroke(dkgray);
    fill(ltblue); // glass
    rect(256.5, 425, 40, 250, 4);

    fill(silver);
    rect(272, 430, 10, 230);
    rect(256.5, 650, 40, 25);
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

    // shade
    stroke(silver);
    fill(dkgray);
    arc(276, 430, 225, 250, 180, 180, 180, CHORD);
    fill(white);
    arc(276, 415, 225, 250, 180, 180, 180, OPEN);

    // pull
    stroke(gray);
    strokeWeight(.5);
    fill(silver);
    ellipse(307, 460, 15, 20);

    fill(gray);
    ellipse(307, 460, 5, 10);

    stroke(gray);
    strokeWeight(2);
    beginShape(LINES);
    vertex(308, 459);
    vertex(315, 465);
    vertex(316, 465);
    vertex(315, 560);
    endShape();

    strokeWeight(.5);
    fill(silver);
    ellipse(circle1.x, circle1.y, circle1.radius);


    // PAINTING - Upper Right Corner
    // canvas
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
    rect(157.5, 157.5, diamondWidth, diamondHeight);
    pop();

    // fish on green background
    fill(black);
    triangle(862.5, 115, 885, 100, 885, 130); //top fish
    ellipse(825, 115, 80, 30);

    triangle(762.5, 185, 785, 170, 785, 200); // middle fish
    ellipse(725, 185, 80, 30);

    triangle(862.5, 265, 885, 250, 885, 280); // bottom fish
    ellipse(825, 265, 80, 30);

    // eyes of fish
    fill(red);
    ellipse(800, 115, 5); // top fish
    ellipse(700, 185, 5); // middle fish
    ellipse(800, 265, 5); // bottom fish


    // ANIMATIONS RELATED TO HOVERING NEAR THE LAMP
    /*
     /  if hover near the lamp, the entire background will turn black,
     /  a few diamonds will turn yellow, one fish will move across page and
     /  one in the upper right portion of the page will be redrawn in light grey
     /  otherwise, fish will be drawn in black on a green background or 'painting'
    */
    if ((mouseX < 385) && (mouseX > 150) && (mouseY > 250)) {
        background(black); // background changes to black

        push(); // diamonds change colors
        translate(680, 70);
        rotate(45, 45);
        fill(yellow);
        rect(0, 0, diamondWidth, diamondHeight);
        rect(150, 150, diamondWidth, diamondHeight);
        fill(red);
        rect(200, -50, diamondWidth, diamondHeight);
        fill(blue);
        rect(220, -70, diamondWidth, diamondHeight);
        pop();

        fill(yellow); // lamp shade
        arc(276, 415, 225, 250, 180, 180, 180, OPEN);
        fill(red); // lamp pull
        ellipse(circle1.x, circle1.y, circle1.radius);

        noStroke();
        fill(green); // lamp base
        ellipse(273, 685, 200, 90);
        fill(black);
        ellipse(273, 678, 200, 80);

        fill(blue); // center part of the lamp body
        rect(272, 430, 10, 230);

        // FISH SWIMMING ACROSS THE PAGE
        fill(gray); // fish body and tail
        triangle(triangle2.x1, 185, triangle2.x2, 170, triangle2.x3, 200); // tail
        triangle2.x1 -= 4;
        triangle2.x2 -= 4;
        triangle2.x3 -= 4;
        ellipse(ellipse2.x, 185, 80, 30); // body
        ellipse2.x -= 4;
        fill(red); // eye
        ellipse(ellipseSm2.x, 185, 5);
        ellipseSm2.x -= 4;

        // if the position of the eye is zero, reset the x position on the page
        if (ellipseSm2.x < 0) {
            triangle2.x1 = 762.5;
            triangle2.x2 = 785;
            triangle2.x3 = 785;
            ellipse2.x = 725;
            ellipseSm2.x = 700;
        } // end conditional statement for x position of swimming fish

        // FISH ON BLACK BACKGROUND
        fill(gray); // fish body and tail
        triangle(762.5, 185, 785, 170, 785, 200); // tail
        ellipse(725, 185, 80, 30); // body
        fill(red); // eye
        ellipse(700, 185, 5);
    } // end conditional statement for lamp animations

    // ANIMATIONS RELATED TO HOVERING NEAR THE LAMP
    /*
     /  if hover near the lamp, the entire background will turn black,
     /  a few diamonds will turn yellow, one fish will move across page and
     /  one in the upper right portion of the page will be redrawn in light grey
     /  otherwise, fish will be drawn in black on a green background or 'painting'
    */

    if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 50) && (mouseY < 139)) {
        fill(blue); // top fish eye in painting
        ellipse(800, 115, 5);

        fill(blue); // fish eye on card
        ellipse(500, 705, 3);

    } else if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 140) && (mouseY < 214)) {
        fill(blue); // top fish in painting
        ellipse(800, 115, 5);

        fill(red); // middle fish eye in painting
        ellipse(700, 185, 5);

        fill(yellow); // bottom fish eye in painting
        ellipse(800, 265, 5);

        fill(red); // lamp pull
        ellipse(circle1.x, circle1.y, circle1.radius);

    } else if ((mouseX > 640) && (mouseX < 920) &&
        (mouseY > 215) && (mouseY < 290)) {
        fill(yellow); // bottom fish eye in painting
        ellipse(800, 265, 5);

        fill(yellow); // fish eye on card
        ellipse(500, 705, 3);

    } else {
    } // end conditional statements for painting animations

    // ANIMATIONS RELATED TO HOVERING OVER THE CARD ON TABLE
    /* if hover over the card, one diamond in the painting turns blue,
     / the eye of the middle fish in painting turns yellow and
     / the lamp pull turns red
    */
    if ((mouseX > 430) && (mouseX < 540) &&
        (mouseY > 680) && (mouseY < 730)) {
        push();
        fill(blue);
        translate(680, 70);
        rotate(45, 45);
        rect(200, -50, diamondWidth, diamondHeight);
        pop();

        fill(yellow); // middle fish eye
        ellipse(700, 185, 5);

        strokeWeight(.5); // lamp pull
        fill(red);
        ellipse(circle1.x, circle1.y, circle1.radius);
    } // end conditional statment for card animations
} // close function draw

// ADDITIONAL ANIMATION RELATED TO THE CARD ON TABLE
// if click on the card, the background returns to a lighter gray color
function mouseClicked() {
    if ((mouseX > 430) && (mouseX < 540) &&
        (mouseY > 680) && (mouseY < 730)) {
        background(150);
    } // end conditional statement for mouse click

} // close function mouseClicked
