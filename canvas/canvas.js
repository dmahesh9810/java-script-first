var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 20;

var ctx = canvas.getContext('2d');

// function f(){
//   requestAnimationFrame(f);

//   ctx.fillStyle = 'rgba(255,0,0,0.5)';
//   ctx.fillRect(100, 100, 100, 100);
//   ctx.fillStyle = 'green';
//   ctx.fillRect(200, 200, 100, 100);
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(300, 300, 100, 100);
//   console.log(canvas);

//   ctx.beginPath();
//   ctx.moveTo(60, 200);
//   ctx.lineTo(300, 100);
//   ctx.lineTo(400, 200);
//   ctx.strokeStyle = '#fa34a3';
//   ctx.stroke();

//   for (let i = 0; i < 2; i++) {
//       var color = "#" + ((1<<24)*Math.random() | 0).toString(16);
//       var x = Math.random() * window.innerWidth;
//       var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = color;
//     ctx.stroke();
//   }

//     ctx.beginPath();
//     ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
//     ctx.stroke();
// }
// f();

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    //   var color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    // ctx.fillStyle = color;
    // ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth - 40 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight - 20 || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  let radius = 60;
  let x = Math.random() * (innerWidth - 40 - radius * 2) + radius;
  let y = Math.random() * (innerHeight - 20 - radius * 2) + radius;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth - 40, innerHeight - 20);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
