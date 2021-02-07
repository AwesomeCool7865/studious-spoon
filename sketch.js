var database;
var dog,sadDog,happyDog;
var feedButton, addButton;
var milkBottle;

var foodS, foodStock;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database= firebase.database();

  feedButton= createButton("Feed");
  addButton=createButton("Add Food");

  feedButton.position(450, 100);
  addButton.position(500,100);

  feedButton.mousePressed(feedDoggie);
  addButton.mousePressed(addFood);

  milkBottle = new Food(80, 80);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(171,240,209);
  drawSprites();

  milkBottle.display();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

}

function feedDoggie(){
  dog.addImage(happyDog);

  if (food.Obj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}