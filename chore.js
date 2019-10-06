//global variables
var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
var startButton = document.getElementById('start');
var currentlyPlaying = true;

//to check chore bot
const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
};

//check to see if the door is clicked
const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;

  }else{
    return true;
  }
};


//the door working
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door)){
    gameOver();
  }
};


//random door
const randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    opendoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};

//door images
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";


//result when clicked
door1.onclick = () => {

  if (!isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
  playDoor(door1);
  }

};

door2.onclick= () => {

  if (!isClicked(doorImage2) && currentlyPlaying === true ){
    doorImage2.src = openDoor2;
  playDoor(door2);
  }
};

door3.onclick= () => {

  if (!isClicked(doorImage3) && currentlyPlaying === true){
     doorImage3.src = openDoor3;
  playDoor(door3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying === false){
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}


//game over function
const gameOver = (status) => {
  if (status === 'win'){
   startButton.innerHTML = 'You win! play again?';
  }else {
    startButton.innerHTML = 'Game over! Play Again?';
  };
  currentlyPlaying = false;
}





//start the game
startRound();
