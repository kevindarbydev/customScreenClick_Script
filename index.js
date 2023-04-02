var robot = require('robotjs')


function main(){  
  var numOfOre = 165;
  var counter = numOfOre / 5;
  console.log("Starting...");
while (counter > 0){
 tsmDestroy();
 counter--;
}
console.log("Prospecting complete!")
}



function test(){
  robot.moveMouse(50,270);
  robot.moveMouse(880,332);
}
main();



function tsmDestroy(){
 robot.moveMouse(950, 760);
    robot.mouseClick();
    sleep(3000);
    }

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}




function AVMarks(){
  //these are pixel values, if you take a screenshot of your screen and then hover 
  //over a certain part in paint, you can see what the pixel coordinates of certain
  //locations on your screen. you can change these values to click on the other marks options
  // in the shop, like AB, WSG etc 

  //everything you need is here http://robotjs.io/docs/syntax
  robot.moveMouse(50,270);
  sleep(250);
  robot.mouseClick("right");
   sleep(250);
  //inv is 1550,430 880,328
  robot.moveMouse(880,332);
   sleep(250);
  robot.mouseClick();
   sleep(250); 
    
}
function clickMarks(){
  let closeShop = 0;
  robot.moveMouse(402,176);
  robot.mouseClick();
  closeShop++;
  let invCounter = 0;
  while (invCounter < 10 && closeShop != 0){
   robot.moveMouse(1545,220);
    sleep(250);
    robot.mouseClick("right");
    sleep(2500);
    invCounter++;
    console.log("Clicked inventory x" + invCounter)
  }
  console.log("Open store interface and run script again to buy and turn in another 10")
}
//402,176
//Old impl
/*
// import robotJS library -- saved to variable

var robot = require('robotjs');


function main(){
  var counter = 0;
console.log("Starting...");

while (true){
  robot.moveMouse(950, 740);
    robot.mouseClick();
    counter++;
    console.log("Counter now at : " + counter);
    sleep(3350);
    if (counter >= 45){
      break;
    }
}
console.log("Done!");

}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();

*/