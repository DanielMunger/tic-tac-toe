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
  this.players = [];
  this.newBoard();
};

Player.prototype.setMark = function() {
  return this.markType;
};

Player.prototype.getMark = function() {
  return this.markType;
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
  if (this.spaces[0].mark === this.spaces[1].mark === this.spaces[2].mark) {
    winningMark = this.spaces[0].mark;
  } else if (this.spaces[3].mark === this.spaces[4].mark === this.spaces[5].mark) {
    winningMark = this.spaces[3].mark;
  } else if (this.spaces[6].mark === this.spaces[7].mark === this.spaces[8].mark) {
    winningMark = this.spaces[6].mark;
  } else if (this.spaces[0].mark === this.spaces[3].mark === this.spaces[6].mark) {
    winningMark = this.spaces[0].mark;
  } else if (this.spaces[1].mark === this.spaces[4].mark === this.spaces[7].mark) {
    winningMark = this.spaces[1].mark;
  } else if (this.spaces[2].mark === this.spaces[5].mark === this.spaces[8].mark) {
    winningMark = this.spaces[2].mark;
  } else if (this.spaces[1].mark === this.spaces[4].mark === this.spaces[8].mark) {
    winningMark = this.spaces[1].mark;
  } else if (this.spaces[2].mark === this.spaces[4].mark === this.spaces[6].mark) {
    winningMark = this.spaces[2].mark;
  }
  return winningMark;
};

Board.prototype.nextPlayer = function() {
};

Board.prototype.newBoard = function(){
  this.spaces = []
  for (x=1; x<=3; x++){
    for(y=1; y<=3; y++){
      var space = new Space(x,y);
      this.spaces.push(space);
    }
  };
};

var board = new Board();
console.log(board);
var testSpace = board.findCoordinates(2,1);
