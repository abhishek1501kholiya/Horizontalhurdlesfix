class Player{
    constructor(){
        this.index= null;
        this.distance = 0;
        this.name = null;

    }
  playertoUpdate(){
    var playeref =database.ref('playerCount');
     playeref.on("value",(data)=>{
      playerCount = data.val();
  })
 }
     playerupdate (count){
         database.ref('/').update({
         playerCount : count
      })
       }
       update(){
           var playerIndex = "players/player" + this.index;
           database.ref(playerIndex).set({
               name:this.name,
               distance:this.distance

           })
       }
    static getPlayerinfo() {
        var playerinforef = database.ref('players');
        playerinforef.on("value",(data)=>{
        allPlayers = data.val();
        })
    }  

}