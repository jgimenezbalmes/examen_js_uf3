let canvas = document.getElementById('joc');
let context = canvas.getContext('2d');
let graella = 15;
let alçadaPala = graella * 5; 
let maximPalaY = canvas.height - graella - alçadaPala;

var paddleSpeed = 6;
var velocitatPilota = 5;

let palaEsquerra = {
  x: graella * 2,
  y: canvas.height / 2 - alçadaPala / 2,
  amplada: graella,
  alçada: alçadaPala,
};

let palaDreta = {
  x: canvas.width - graella * 3,
  y: canvas.height / 2 - alçadaPala / 2,
  amplada: graella,
  alçada: alçadaPala,
};

let pilota = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  amplada: graella,
  alçada: graella,

  reset: false,

  dx: velocitatPilota,
  dy: -velocitatPilota
};


function collides(obj1, obj2) {
    return obj1.x < obj2.x + obj2.amplada &&
           obj1.x + obj1.amplada > obj2.x &&
           obj1.y < obj2.y + obj2.alçada &&
           obj1.y + obj1.alçada > obj2.y;
  }
  
  //Per moviment ratoli
  /*window.addEventListener('mousemove', e => {
      // Callback function
      palaEsquerra.y = e.clientY;
      console.log(e.clientY);
  });*/
  
  
  
  
  function loop() {
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);
  
  
  
    if (palaEsquerra.y < graella) {
      palaEsquerra.y = graella;
    }
    else if (palaEsquerra.y > maximPalaY) {
      palaEsquerra.y = maximPalaY;
    }
  
    if (palaDreta.y < graella) {
      palaDreta.y = graella;
    }
    else if (palaDreta.y > maximPalaY) {
      palaDreta.y = maximPalaY;
    }
  
    context.fillStyle = 'white';
  
    context.fillRect(palaEsquerra.x, palaEsquerra.y, palaEsquerra.amplada, palaEsquerra.alçada);
    context.fillRect(palaDreta.x, palaDreta.y, palaDreta.amplada, palaDreta.alçada);
  
    pilota.x += pilota.dx;
    pilota.y += pilota.dy;
  
    if (pilota.y < graella) {
      pilota.y = graella;
      pilota.dy *= -1;
    }
    else if (pilota.y + graella > canvas.height - graella) {
      pilota.y = canvas.height - graella * 2;
      pilota.dy *= -1;
    }
  
    if ( (pilota.x < 0 || pilota.x > canvas.width) && !pilota.reset) {
      pilota.reset = true;
  
      setTimeout(() => {
        pilota.reset = false;
        pilota.x = canvas.width / 2;
        pilota.y = canvas.height / 2;
      }, 400);
    }
  
    if (collides(pilota, palaEsquerra)) {
      pilota.dx *= -1;
  
      pilota.x = palaEsquerra.x + palaEsquerra.amplada;
    }
    else if (collides(pilota, palaDreta)) {
      pilota.dx *= -1;
  
      pilota.x = palaDreta.x - pilota.amplada;
    }
  
  palaDreta.y = pilota.y;
  
    context.fillRect(pilota.x, pilota.y, pilota.amplada, pilota.alçada);
  
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, canvas.width, graella);
    context.fillRect(0, canvas.height - graella, canvas.width, canvas.height);
  
    for (let i = graella; i < canvas.height - graella; i += graella * 2) {
      context.fillRect(canvas.width / 2 - graella / 2, i, graella, graella);
    }
  
  }

export{canvas, context, graella, alçadaPala, maximPalaY, paddleSpeed, velocitatPilota, palaEsquerra, palaDreta, pilota, collides, loop};
