//Create variables here
var dog,happyDog,dogImg;
var foodStock,foodS;
var database;

function preload()
{
  //load images here
  dogImg.loadImage("images/dogImg.png");
  dogHappyImg.loadImage("images/dogImg1.png");
  dataBase=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogImg);
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogHappyImg);
  }
}

function readStock()
{
  foodS=data.val();
}

function writeStock(x)
{
  database.ref('/').update({food:x})
}



