// Buisness Logic

function Player(username, markType) {
  this.username = username;
  this.totalScore = 0;
  this.isCurrentPlayer = false;
  this.markType = markType;
};

function Space(xCoordinate, yCoordinate, mark) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.mark = mark;
};

function Board() {
  this.newPlayers();
  this.newBoard();
};



Space.prototype.getCoordinates = function() {
    return this.xCoordinate, this.yCoordinate;
};

Board.prototype.findCoordinates = function(x, y) {
  var output;
  this.spaces.forEach(function(space){
    if(space.xCoordinate === x && space.yCoordinate === y){
      output = space;
    };
  });
  return output;
};

Board.prototype.checkWinMark = function() {
  var winningMark;
  if ((this.spaces[0].mark === this.spaces[1].mark) && (this.spaces[0].mark === this.spaces[2].mark) && (this.spaces[0].mark != undefined)) {
    winningMark = this.spaces[0].mark;
  } else if ((this.spaces[3].mark === this.spaces[4].mark) && (this.spaces[3].mark === this.spaces[5].mark)&& (this.spaces[3].mark != undefined)) {
    winningMark = this.spaces[3].mark;
  } else if ((this.spaces[6].mark === this.spaces[7].mark) && (this.spaces[6].mark === this.spaces[8].mark)&& (this.spaces[6].mark != undefined)) {
    winningMark = this.spaces[6].mark;
  } else if ((this.spaces[0].mark === this.spaces[3].mark) && (this.spaces[0].mark === this.spaces[6].mark)&& (this.spaces[0].mark != undefined)) {
    winningMark = this.spaces[0].mark;
  } else if ((this.spaces[1].mark === this.spaces[4].mark) && (this.spaces[1].mark === this.spaces[7].mark)&& (this.spaces[1].mark != undefined)) {
    winningMark = this.spaces[1].mark;
  } else if ((this.spaces[2].mark === this.spaces[5].mark) && (this.spaces[2].mark === this.spaces[8].mark)&& (this.spaces[2].mark != undefined)) {
    winningMark = this.spaces[2].mark;
  } else if ((this.spaces[0].mark === this.spaces[4].mark) && (this.spaces[0].mark === this.spaces[8].mark)&& (this.spaces[0].mark != undefined)) {
    winningMark = this.spaces[0].mark;
  } else if ((this.spaces[2].mark === this.spaces[4].mark) && (this.spaces[2].mark === this.spaces[6].mark)&& (this.spaces[2].mark != undefined)) {
    winningMark = this.spaces[2].mark;
  }

  return winningMark;
};

Board.prototype.nextPlayer = function() {
  if(this.players[0].isCurrentPlayer) {
    this.players[0].isCurrentPlayer = false;
    this.players[1].isCurrentPlayer = true;
  } else{
    this.players[1].isCurrentPlayer = false;
    this.players[0].isCurrentPlayer = true;
  };
};
Board.prototype.getMark = function() {
  if(this.players[0].isCurrentPlayer){
    this.nextPlayer();
    return this.players[0].markType;
  } else{
    this.nextPlayer();
    return this.players[1].markType;
  }
};

Board.prototype.newPlayers = function() {
  this.players = []
  this.players.push(new Player());
  this.players.push(new Player());
  this.players[0].isCurrentPlayer = true;
  this.players[0].markType = 'X';
  this.players[1].markType = 'O';
}

Board.prototype.newBoard = function(){
  this.spaces = []
  for (x=1; x<=3; x++){
    for(y=1; y<=3; y++){
      var space = new Space(x,y);
      this.spaces.push(space);
    }
  };
};


$(document).ready(function() {
  var newBoard = new Board();
  $(".game-board").each(function() {
    $("button").click(function() {
      var buttonCoord = $(this).attr("value");
      var coords = buttonCoord.split(",")
      var x = parseInt(coords[0]);
      var y = parseInt(coords[1]);
      var space = newBoard.findCoordinates(x, y);
      space.mark = newBoard.getMark();
      $(this).text(space.mark)
      $(this).off();
      if(newBoard.checkWinMark()) {
        alert(newBoard.checkWinMark() + " Wins!")
      };
    });
  });
});
