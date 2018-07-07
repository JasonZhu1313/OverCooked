let container = document.getElementsByClassName("gameboardcontainer")[0];
var NORMALGRID = 0;
var COOKTABLEGRID = 1;
var LETTUCESTORE = 2;
var BREADSTORE = 3;
var MEATSTORE = 4;
var TOMATOSTORE = 5;
var POTSTORE = 6;
var CHOPPINGBOARDSTORE = 7;
var GARBBAGE = 8;
var SUBMITGRID = 9;
var WASHINGGRID = 10;
var PLATEGRID = 11;
const gameBoard = (() => {
  const getBoardByChapter = (chapter) => {
    if(chapter == 1){
       var specializedBoard = [[1,1,10,1,1,1,1,6,6,6,6,1],[1,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,0,1,1,0,0,0,0,1],
[1,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[5,0,0,0,0,0,0,0,0,0,0,9],[4,0,0,0,0,1,1,0,0,0,0,1],
[3,0,0,0,0,1,1,0,0,0,0,1],[2,0,0,0,0,1,1,0,0,0,0,1],[1,8,0,0,0,1,1,0,0,0,0,1],[1,7,1,7,1,1,1,11,11,11,11,1]];
       }
    return specializedBoard;
  };
  // refresh the game board
  const refreshBoard = (mapsize) => {
    //console.log(mapsize);
    
    if(mapsize <= 0 ){
       alert("mapsize should be larger than 0");
       }else{
 container.style.gridTemplateColumns="repeat("+mapsize+",30px)";
 container.style.gridTemplateRows="repeat("+mapsize+",30px)";
        var board = new Array(mapsize);
    for(i =0; i<board.length; i++){
       board[i] = new Array(mapsize);
    } 
    drawBoard(board);
       }
    return board;
  };
  
  const loadChapter = (chapter) => {
    var board = getBoardByChapter(chapter);
    const height = board.length;
    const width = board[0].length;
    if(height <= 0 || width <= 0){
       alert("map size error");
       }else{
         container.style.gridTemplateColumns="repeat("+width+",30px)";
 container.style.gridTemplateRows="repeat("+height+",30px)";
         drawBoard(board);
       }
    return board;
  }
  const drawBoard = (board) => {
    // let container = document.getElementsByClassName("gameboardcontainer")[0];
    for(i = 0;i<board.length;i++){
      for(j = 0;j<board[i].length;j++){
        let div = util.createElement("div");
        if(board[i][j] == 0){
           div.setAttribute("class","boxnormalgrid");
         }else if(board[i][j] == 1){
                  div.setAttribute("class","cooktablegrid");
         }else if(board[i][j] == 2){
                  div.setAttribute("class","lettucestore");
         }else if(board[i][j] == 3){
                  div.setAttribute("class","breadstore");
         }else if(board[i][j] == 4){
                  div.setAttribute("class","meatstore");
         }else if(board[i][j] == 5){
                  div.setAttribute("class","tomatostore");
         }else if(board[i][j] == 6){
                  div.setAttribute("class","potstore");
         }else if(board[i][j] == 7){
                  div.setAttribute("class","choppingboardstore");
         }else if(board[i][j] == 8){
                  div.setAttribute("class","garbbage");
         }else if(board[i][j] == 9){
                  div.setAttribute("class","submitgrid");
         }else if(board[i][j] == 10){
                  div.setAttribute("class","washinggrid");
         }else{
                  div.setAttribute("class","plategrid");
         }
        //div.setAttribute("class","boxnormal");
        index = i*board.length + j + 1;
        div.setAttribute("name", index);
        div.innerHTML = index;
        util.attach(container,div);
        //console.log( i*board.length + j + 1); 
      }
    }
  };
  return {refreshBoard, loadChapter,drawBoard};
})();

const gameController = (()=>{
   var board;
   // const chooseBoard = () => {
   //   // return a game board
   // }
   const getRandomPosition = (min,max) => {
     return Math.floor(Math.random() * (max - min)+ min);
   };
 　const initGame = (mode,map) => {
      //board = gameBoard.refreshBoard(10);
       board=gameBoard.loadChapter(1);
      //var board = chooseBoard();
      // one person mode
      if(mode){ 
          //console.log("hahha");
          var player = Player("player");
          // while(true){
          //   var x = getRandomPosition(0,board.length);
          //   var y = getRandomPosition(0,board.length);
          //   console.log("x"+x);
          //   console.log("y"+y);
          //   var oriention = getRandomPosition(0,4);
          //   if(board[y*board.length + x] == 0){
          //     player.x = x;
          //     player.y = y;
          //     player.oriention = oriention;
          //      break;
          //      }
          //   break;
          // }
          var x = getRandomPosition(0,board.length);
          var y = getRandomPosition(0,board.length);
          
          var oriention = getRandomPosition(0,4);
          
          player.x = x;
          player.y = y;
          player.oriention = oriention;
          player.no = 1;
          player.velocity = 5;
          drawPlayer([player]);
        return [player];
      }else{
          var player1 = Player("player1");
          var player2 = Player("player2");
          // while(true){
          //   var x1 = getRandomPosition(0,board.length);
          //   var y1 = getRandomPosition(0,board.length);
          //   var oriention1 = getRandomPosition(0,4);
          //   var x2 = getRandomPosition(0,board.length);
          //   var y2 = getRandomPosition(0,board.length);
          //   var oriention2 = getRandomPosition(0,4);
          //   if(board[y1*board.length + x1] == 1 && board[y2*board.length + x2] == 1){
          //     player1.x = x1;
          //     player1.y = y1;
          //     player1.oriention1 = oriention1;
          //     player2.x = x2;
          //     player2.y = y2;
          //     player2.oriention2 = oriention2;
          //     break;
          //   }
          //   break;
          // }
          var x1 = getRandomPosition(0,board.length);
          var y1 = getRandomPosition(0,board.length);
          var oriention1 = getRandomPosition(0,4);
          var x2 = getRandomPosition(0,board.length);
          var y2 = getRandomPosition(0,board.length);
          var oriention2 = getRandomPosition(0,4); 
          player1.x = x1;
          player1.y = y1;
          player1.oriention1 = oriention1;
          player1.no = 1;
          player1.velocity = 5;
          player2.x = x2;
          player2.y = y2;
          player2.no = 2;
          player2.oriention2 = oriention2;
          player2.velocity = 5;
          drawPlayer([player1,player2]);
          return [player1,player2];
      }
  };
  const move = (player,i) => {
      if(player.oriention != i){
        player.oriention = i;
        // add oriention animation
        removePlayer(player);
        drawPlayer([player]);
        }else{
         var canmove = false;
         if(i == 0 && (player.y - 1) >= 0 ){
           // up
            canmove = true;
         }
          if(i == 1 && (player.y + 1) <= (board.length-1)){
            // down
           canmove = true;
          }
          
          if(i == 2 && (player.x - 1)  > 0){
             canmove = true;    
          }
          
          if(i == 3 && (player.x + 1)  <= (board.length-1)){
            canmove = true;
          }
          
         if(canmove){
           removePlayer(player);
            
           if(i == 0){
               player.y -= 1; 
             }
            if(i == 1){
               player.y += 1;  
             }
           if(i==2){
               player.x -= 1;    
             }
           if(i == 3){
               player.x += 1;
             }
            drawPlayer([player])
           }
        }
  };
  const removePlayer = (player) => { 
    var index = player.x + player.y*board.length +1;
    var div = document.getElementsByName(index)[0];
    var childNode = div.childNodes[0];
    childNode.remove();
    div.innerHTML = index;
  };
  const playGame = (playerList) => {
    var mode;
    if(playerList.length == 1){
       var player = playerList[0];
       mode = true;
       }else{
         var player = playerList[0];
         var player2 = playerList[1];
         mode = false;
       }
    var processQueue = [];
    // used to prevent continueous press a key
    var keyMap ={};
    document.addEventListener("keydown",(event) => {
      const keyName = event.key;
      console.log(keyName);
      keyMap[keyName] = true;
      processQueue.push(keyName);
    });
    
    document.addEventListener("keyup",(event) => {
      console.log(processQueue);
      while(processQueue.length != 0){
            const pressedKey = processQueue.shift();
            console.log(keyMap);
            if(keyMap[pressedKey]){
               keyMap[pressedKey] = false;
               }else{
                 continue;
               }
            if(pressedKey === "5" || pressedKey === "ArrowUp"){
                  move(player,0);
             }
             if(pressedKey === "1" || pressedKey === "ArrowLeft"){
                  move(player,2);     
             }
             if(pressedKey === "2" || pressedKey === "ArrowDown"){
                  move(player,1);     
              }
             if(pressedKey === "3" || pressedKey === "ArrowRight"){
                  move(player,3);                
             }
             if(pressedKey === "0"|| pressedKey === ";"){
                   
              }  
            if(!mode){
               if(pressedKey === "w"){
                  move(player2,0);
               }
               if(pressedKey === "a"){
                  move(player2,2);      
               }
               if(pressedKey === "s"){
                    move(player2,1);       
                }
              if(pressedKey === "d"){
                    move(player2,3);                
                 }
               if(pressedKey === " "){
                   
                 }
            }
        }
    });
  }
  const drawPlayer = (playerList) => {
    for(i =0;i<playerList.length;i++){
      var playerx = playerList[i].x;
      var playery = playerList[i].y;  
      var oriention = playerList[i].oriention;
      if(oriention == 0){
        oriention = "up";
      }else if(oriention == 1){
        oriention = "down";
      }else if(oriention == 2){
        oriention = "left";
      }else{
        oriention = "right";
      }
      var index = playerx + playery*board.length+1;
      var div = document.getElementsByName(index)[0];
      div.innerHTML="";
      var player = util.createElement("div");
      player.setAttribute("class","player");
      const playerno = playerList[i].no;
      //player.classList.add("player"+(playerno));
      player.classList.add("p"+(playerno)+"-orientation-"+(oriention));
      util.attach(div,player);   
    }
  };
  return {initGame,playGame};
})();

const util = (() =>{

  const createElement = (elem) => {
    return document.createElement(elem);
  };
  const attach = (elem1,elem2) => {
    elem1.appendChild(elem2);
  };
  return {createElement,attach};
})();
const removeElement = (elem) => {
  elem.parentNode.removeChild(elem);
};
const Player = function(playername){
    var no;
    var velocity;
    var x;
    var y;
    var oriention;
    return {no,x,y,oriention};
}
