


  var analyzer;

   analyzer = new p5.Amplitude();
   analyzer.setInput(mySong);






var mySong;
var myImage;

function preload() {
  mySong = loadSound("TG1_bumper.mp3");
  myImage = loadImage('./TG1.png');
  // myImage2 = loadImage('./Earth.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
let rms = analyzer.getLevel();
  var distx=abs(mouseX-width/2);
  var disty=abs(mouseY-height/2);
  if (distx<90 &&disty<67.5) {
    background(100,170,180);

    imageMode(CENTER);
    image(myImage,width/2, height/2, 200*(rms+1), 150*(rms+1));

    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    background(130,100,180);
    imageMode(CENTER);
    image(myImage,width/2, height/2, 180, 135);
    mySong.stop();
  }

    // image(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
// function mousePressed() {
