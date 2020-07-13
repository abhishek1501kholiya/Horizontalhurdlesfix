class Form {
  constructor (){
    this.input = createInput("Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
  }
  display(){
    this.title.html("Horizontal Runner");
    this.title.position(200 , 50);
    
    this.input.position(200, 200);
    this.button.position(200, 300);
  
  this.button.mousePressed(()=>{
   this.input.hide();
   this.button.hide();
   playerCount += 1;
  // player.playerupdate(playerCount);
   playername = this.input.value();
   this.greeting.html("Hello" + playername);
   this.greeting.position(200,200);
  });
  }
}
