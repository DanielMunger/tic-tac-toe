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
  this.spaces = [];
};

Player.prototype.setMark =function() {
  return this.markType;
};

Player.prototype.getMark =function() {
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

Board.prototype.nextPlayer = function() {

};



var board = new Board();

for (x=1; x<=3; x++){
  for(y=1; y<=3; y++){
    var space = new Space(x,y);
    board.spaces.push(space);
  }
  console.log(board);
};
var testSpace = board.findCoordinates(2,1);

console.log(testSpace);
