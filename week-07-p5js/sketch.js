  function setup() {
    createCanvas(400, 400);
    background('gainsboro');
  }

  function mouseMoved(){
    line(133, 1, 133, 400);
    line(266, 1, 266, 400);
    line(1, 133, 400, 133);
    line(1, 266, 400, 266);
  }

  function drawFlower(flowerX, flowerY, petalSize) {
    let petalDistance = petalSize / 2;

    fill(255, 255, 255);
    circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);
    circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);
    circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);
    circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

    fill('peru');
    circle(flowerX, flowerY, petalSize);
  }

  function drawHeart(x,y,len,lineT){
    heartV1x=x-len/2
    heartV1y=y+len/2
    heartV2x=x
    heartV2y=y+len
    heartV3x=x+len/2
    heartV3y=y+len/2
    heartV4x=x+len
    heartV4y=y
    heartV5x=x+len+(len/8)
    heartV5y=y-len/1.25
    heartV6x=x+len/1.5
    heartV6y=y-len-len/2
    heartV7x=x
    heartV7y=heartV5y-len/3.5
    heartV8x=x-len/1.5
    heartV8y=y-len-len/2
    heartV9x=x-len-(len/8)
    heartV9y=y-len/1.25
    heartV10x=x-len
    heartV10y=y
    heartV11x=x-len/2
    heartV11y=y+len/2
    stroke(0)
    strokeWeight(lineT)
    beginShape()
    fill('rosybrown')
    vertex(heartV1x,heartV1y)
    vertex(heartV2x,heartV2y)
    vertex(heartV3x,heartV3y)
    vertex(heartV4x,heartV4y)
    vertex(heartV5x,heartV5y)
    vertex(heartV6x,heartV6y)
    vertex(heartV7x,heartV7y)
    vertex(heartV8x,heartV8y)
    vertex(heartV9x,heartV9y)
    vertex(heartV10x,heartV10y)
    vertex(heartV11x,heartV11y)
    endShape()}

  function mousePressed() {
    if (mouseButton === LEFT) {
      drawFlower(mouseX, mouseY, 50);}

    else if (mouseButton === RIGHT) {
      drawHeart(mouseX, mouseY, 40);
    }
  }
