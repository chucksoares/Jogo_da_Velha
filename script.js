//Inicio
var square = {
a1:'' , a2: '' , a3: '', 
b1: '' , b2: '', b3: '',
c1: '' , c2: ''  , c3: ''
};

var player = '';
var warning ='';
var playing = false;

 reset();

//Eventos
document.querySelector('.reset').addEventListener('click' , reset);
 document.querySelectorAll('.item').forEach(item => {       //Vai rodar de forma resumida em todos os square item.
    item.addEventListener('click' , itemClick);
 });


//Funções
function itemClick(event){
 var item = event.target.getAttribute ('data-item'); 
 if (square[item] === ''){
     square[item] = player;
     renderSquare();  //Pega o que está no square e coloca na tela
     togglePlayer(); //define a troca de jogador
 }
}
function reset(){
    warning = '';
    var random = Math.floor(Math.random()*2);
    player = (random === 0)? 'x' : 'o'; //Método resumido de if e else

for(var i in square){
     square[i]= ''; //loop para zerar os itens
 }
playing = true; 

renderSquare();
renderInfo();

}

function renderSquare(){                     
for(var i in square){
     var item = document.querySelector(`div[data-item=${i}]`);
         item.innerHTML = square[i];
     }
     checkGame();
}

function renderInfo(){                                 
 document.querySelector('.vez').innerHTML = player;
 document.querySelector('.resultado').innerHTML = warning;
}
function togglePlayer (){
    player = (player === 'x' && 'o') ? 'o' : 'x'; //Método resumido de if e else, troca o player..
    renderInfo();
}

function checkGame(){                       //Processo de verificação de resultado.
 if(checkWinnerFor('x')){
    warning = 'O "x" venceu';
    playing = false;
} else if (checkWinnerFor('o')){
    warning = 'O "o" venceu';
    playing = false;
} else if (isFull(isFull)){
 warning = 'Deu empate';
 playing = false;
}
}
function checkWinnerFor(player){ //possibilidades de vitória
var pos = [
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',
    
    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',

    'a1,b2,c3',
    'a3,b2,c1'
];

for(var w in pos){
    var pArray = pos[w].split(',');//a1, a2, a3 Divide uma string em uma matriz de substrings..
     var hasWon = pArray.every(option => square [option] === player);
     if (hasWon){
         return true;
     }
    }
return false;
}

function isFull(){
 for(var i in square){
     if(square[i] === ''){
        return false;
     }
 }
 return true;
}