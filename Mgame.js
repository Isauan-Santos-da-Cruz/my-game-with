    console.info("progama iniciado mGame.js");

var up, down, left, right, action, po;// movimentaçao do jogador
up="up";
down="down";
left="left";
right="right";
action="action";
po = down;


/*function verificarColisao() {
  if (px < xx + ww &&
    px + w > xx &&
    py < yy +  hh &&
    py + h > yy) {
      
      
      console.log("colidiu");
    return true;
  }
  return false;
}
*/


function control(direction){// direcoes
  if (direction == up){// para cima
    gloomy.src=gloomyD.up;
    py = py - 5;
    l();
    po=up;
  } 
  else if(direction == down){// para baixo
    gloomy.src=gloomyD.front;
    py = py + 5;
    l();
    po = down;
  }
  else if(direction == left){// para esquerda
    gloomy.src=gloomyD.left;
    px = px - 5;
    l();
    
    po = left;
  } 
  else if(direction == right){// para direita
    gloomy.src=gloomyD.right;
    px = px + 5;
    l();
    po = right;
  }
  else if(direction == action){// acao
      console.log("oohhh Bullshit");
      
    }
  //  verificarColisao()
  tempoFiltro()
 } 
  
var time = new Date();
var hora = time.getHours();
var minuto = time.getMinutes();
var fds = (h ,m) => {
  console.log(h+":"+m);
}

setInterval(500 ,fds(hora , minuto));

