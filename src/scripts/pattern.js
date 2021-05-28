
const canvas = document.getElementById("pattern_sample")


var W, M, c, C, WW, WH,
    xNum, yNum, rad, num, angle, pos,
    animationId;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



var initialize = function () {
  W = window;
  M = Math;
  c = canvas
  C = c.getContext("2d");
  WW = c.width = M.floor(W.innerWidth);
  WH = c.height = M.floor(W.innerHeight);
  rad = M.PI / 2;
  pos = [];
  angle = 0;
  length = 20;
  for (var y = 0; y < WH; y+=length) {
    for (var x = 0; x < WW; x+=length) {
      pos.push([x, y, getRandomNumber(0, 1)]);
    }
  }
};

var f = function (t) {
  C.lineWidth = 2;
  for (var i = 0; i < pos.length; i++) {
    C.save();
    
    if (pos[i][2] === 0) {
      C.beginPath();
      C.moveTo(pos[i][0], pos[i][1]);
      C.lineTo(pos[i][0] + length, pos[i][1] + length);
      C.stroke();
    } else {
      C.beginPath();
      C.moveTo(pos[i][0] + length, pos[i][1]);
      C.lineTo(pos[i][0], pos[i][1] + length);
      C.stroke();
    }
  
  }
  
  
};

    initialize();
    f();
    
