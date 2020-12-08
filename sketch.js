var fixedR, moveR;
function setup() {
  createCanvas(1200, 800);
  fixedR = createSprite(600, 400, 50, 80);
  moveR = createSprite(400, 200, 80, 30);
  fixedR.shapeColor = "green";
  moveR.shapeColor = "green";
  //moveR.debug=true;
}
function draw() {
  background(0);
  moveR.x = World.mouseX;
  moveR.y = World.mouseY;
  if (moveR.x - fixedR.x < fixedR.width / 2 + moveR.width / 2
    && fixedR.x - moveR.x < fixedR.width / 2 + moveR.width / 2
    &&moveR.y - fixedR.y < fixedR.height/ 2 + moveR.height/ 2
    && fixedR.y - moveR.y < fixedR.height / 2 + moveR.height / 2) {
    fixedR.shapeColor = "red";
    moveR.shapeColor = "red";
  }
  else {
    fixedR.shapeColor = "green";
    moveR.shapeColor = "green";
  }
  drawSprites();
}