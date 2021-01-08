let STARTING_POSITION = 0;
class Utility{
     SnakeAndLadder=()=> {
          console.log(STARTING_POSITION);
          var Random = Math.floor((Math.random()*6)+1);
          console.log("Die Number is :"+Random);
        }
}
module.exports = new Utility();