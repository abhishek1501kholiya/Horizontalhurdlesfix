var Canvas ;

var jumper1 , jumper2 , jumper3 , jumper4 ;
var Hurdle1;

var playerCount = 0;
var game;
var form;
var playername;
var gameState = 0;
//var gameref;
//var playeref;
function setup (){
Canvas = createCanvas(800,400);
//database = firebase.database();
playerCount = 0;
player = new Player();
game = new Game();
form = new Form();
}
function draw(){
background(255);
if(gameState===0){
  //game.aboutToupdate();
  //player.playertoUpdate();
 console.log(playerCount);
  form.display();
}
if(playerCount===1){
  form.hide();
  console.log("working");
//  game.update(1);
gameState =1;
}
if(gameState===1){
  var posx = 200;
   jumper1 = new Jumper(posx,340,20,80);
   jumper1.move(posx);
   jumper1.display();
   

}
}



