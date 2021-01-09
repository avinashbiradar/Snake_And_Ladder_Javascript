      const STARTING_POSITION = 0;
    const ENDING_POSITION = 100;
    const LADDER = 2;
    const SNAKE = 3;
    const NOPLAY = 1;
    let totalDiceCount=0;
    let TASK;
class Utility{    
  
        gamePlay=(playerPosition,totalDiceCount)=>{
         if(playerPosition<ENDING_POSITION){
           var action=0;
           let dice=this.diceRoll();
           var action =this.optionCheck();
           switch(action){
               case LADDER:
                if (playerPosition+dice<=ENDING_POSITION) {
                TASK="Ladder";
                playerPosition = playerPosition + dice;
                }
                break;
               case SNAKE:
                if (playerPosition-dice>=STARTING_POSITION) {
                    TASK="Snake";
                    playerPosition = playerPosition - dice;
                    }
                break;
                case NOPLAY:
                    playerPosition = playerPosition;
                break;
            }
            console.log("Dice "+dice+" for "+TASK+" current position : "+playerPosition);
        }
        if(TASK=="Ladder"&& playerPosition!=ENDING_POSITION)
        {
            let DiceCount;
            DiceCount = this.dice_Player(totalDiceCount);
           this.gamePlay(playerPosition,totalDiceCount);
        }
        return playerPosition;
    }
    twoPlayers=()=>{
        let Player1position = STARTING_POSITION ;
        let Player2position = STARTING_POSITION ;
        let dice_count = STARTING_POSITION ;
        console.log("Game Started by two player");
        while( Player1position < ENDING_POSITION && Player2position < ENDING_POSITION )
        {
            console.log("player 1 :: ");
            Player1position =this.gamePlay(Player1position,dice_count);
            dice_count = this.dice_Player(dice_count);
            if(Player1position == ENDING_POSITION)
            {
                break;
            }
            console.log("player 2 :: ");
            Player2position = this.gamePlay(Player2position,dice_count);
            dice_count = this.dice_Player(dice_count);
        }
        if(Player1position == ENDING_POSITION){
            console.log("Player 1 won the match");
        }
        else if(Player2position == ENDING_POSITION){
            console.log("Player 2 won the match");
        }
    }
        dice_Player=( diceCount)=>
        {
            diceCount++;
            return diceCount;
        }
        diceRoll=()=>{
            let random = Math.floor((Math.random()*6)+1);
            totalDiceCount++;
            console.log("totalDiceCount " +totalDiceCount);
            return random;     
        }
        optionCheck=()=>{
            let random = Math.floor((Math.random()*3)+1);     
            return random;
        }
        
}
module.exports = new Utility();