
const canvas = document.getElementById("pattern_sample")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
ctx.lineWidth = 2;
  
const getRandomNumber = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);

const render = () => {
  
  const {innerWidth, innerHeight} = window
  
  const pos = [];
  const length = 20;
  
  for (var y = 0; y < innerHeight; y+=length) {
    for (var x = 0; x < innerWidth; x+=length) {
      pos.push([x, y, getRandomNumber(0, 1)]);
    }
  }
  
  for (var i = 0; i < pos.length; i++) {
    
    if (pos[i][2] === 0) {
      ctx.beginPath();
      ctx.moveTo(pos[i][0], pos[i][1]);
      ctx.lineTo(pos[i][0] + length, pos[i][1] + length);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(pos[i][0] + length, pos[i][1]);
      ctx.lineTo(pos[i][0], pos[i][1] + length);
      ctx.stroke();
    }
  
  }
  
}

render()

  
  

  
    
