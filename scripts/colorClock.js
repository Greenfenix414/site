var canvas = document.querySelector("#colorClock");

function setup() {
  createCanvas(200, 200, colorClock);

}  function draw(){
  rgbHour = Math.round(map(hour(), 0, 24, 0, 255));
  rgbMin = Math.round(map(minute(), 0, 60, 0, 255));
  rgbSecond = Math.round(map(second(), 0, 60, 0, 255));
  reverseRgb = color(255 - rgbHour, 255 - rgbMin, 255 - rgbSecond);
  background(rgbHour, rgbMin, rgbSecond);
  textAlign(CENTER, CENTER);
  text(`${rgbHour}` + `:${rgbMin}` + `:${rgbSecond}`, 100, 100);
  fill(reverseRgb)
  textSize(35)
  canvas.style.setProperty("border-color", `${reverseRgb}`);

}

