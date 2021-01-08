    const STARTING_POSITION = 0;
    const LADDER = 2;
    const SNAKE = 3;
    const NOPLAY = 1;
    let  playerPosition=STARTING_POSITION;
class Utility{    
        gamePlay=()=>{
           var action=0;
           let dice=this.diceRoll();
           var action =this.optionCheck();
           console.log("Die Number is :"+dice);
           switch(action){
               case LADDER:
                console.log("Ladder");
                playerPosition = playerPosition + dice;
                console.log("current ladder position: " + playerPosition);
                break;
               case SNAKE:
                console.log("Snake");
                playerPosition = playerPosition - dice;
                if(playerPosition<0){
                    playerPosition=STARTING_POSITION;
                }
                console.log("current snake position: "+playerPosition);
                break;
            case NOPLAY:
                console.log("No-Play");
                playerPosition = playerPosition;
                if(playerPosition<0){
                    playerPosition=STARTING_POSITION;
                }
                console.log("no play position: "+playerPosition);
        }
    }
        diceRoll=()=>{
            let random = Math.floor((Math.random()*6)+1);
            return random;     
        }
        optionCheck=()=>{
            let random = Math.floor((Math.random()*3)+1);     
            return random;
        }
    
}
module.exports = new Utility();