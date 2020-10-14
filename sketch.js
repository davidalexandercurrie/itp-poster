let colors;
let counter = 0;
let firstRun = true;

function setup() {
  createCanvas(450, 600);
  colors = [
    color('#75dddd'),
    color('#508991'),
    color('#172a3a'),
    color('#004346'),
    color('#09bc8a'),
  ];
}

function draw() {
  // frameRate(10);
  rectMode(CENTER);
  background(colors[0]);
  noFill();
  line(width / 2, 0, width / 2, height);
  line(width / 6, 0, width / 6, height);
  line((width * 5) / 6, 0, (width * 5) / 6, height);
  backgroundLines();
  zoomWindows();
  stroke(colors[2]);
  fill(255, 240);
  textSize(20);
  rect(width / 2, (height * 4.93) / 6, width / 3, height / 6);
  // fill(colors[2]);
  textSize(14);
  text('Friday, ', width / 2, (height * 4.7) / 6);
  text('December 18th', width / 2, (height * 5) / 6);
  text('370 Jay Street', width / 2, (height * 5.3) / 6);
  textSize(40);
  // fill(colors[2]);
  text('Winter Show 2020', width / 2, (height * 3.9) / 6);
  itpima(counter);
  counter++;
}

function itpima(counter) {
  textAlign(CENTER);
  textFont('monospace');
  textSize(200);
  fill(255);
  fill(255, 230);
  stroke(colors[2]);
  text('I', width / 6, height / 4);
  text('T', (width * 3) / 6, height / 4);
  text('P', (width * 5) / 6, height / 4);
  text('I', width / 6, height / 2);
  text('M', (width * 3) / 6, height / 2);
  text('A', (width * 5) / 6, height / 2);
}

function backgroundLines() {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      strokeWeight(5);
      stroke(random(colors));

      line(
        (i * width) / 20,
        10 + 10 * noise(i / 20 + counter / 10) + (j * height) / 20,
        ((i + 1) * width) / 20,
        10 + 10 * noise((i + 1) / 20 + counter / 10) + (j * height) / 20
      );
    }
  }
}

function zoomWindows() {
  fill(255);
  strokeWeight(3);
  stroke(colors[3]);
  fill(255, 240);
  rect(width / 2, (height * 5) / 8, width + 10, height / 8);
}
