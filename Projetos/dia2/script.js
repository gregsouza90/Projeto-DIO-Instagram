const nomeTimeA = prompt("Digite o nome do time A.");
const nomeTimeB = prompt("Digite o nome do time B.");

const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener("click", function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
});

pontoB_HTML.addEventListener("click", function() {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
});



function aoClicarEmPontoA() {
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
}

function aoClicarEmPontoB() {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
}




function verificarFimDoSet() {
    //ver se A ganhou o set
if (pontoA >= 21 && pontoA - pontoB >= 2) { //e ter 2 pontos de vantagem
    //A ganhou o set
    setA = setA + 1;
    setA_HTML.innerText = setA;
    zerarPlacarDePontos();    
} else if (pontoB >= 21 && pontoB - pontoA >= 2) {
    //B ganhou o set
    setB = setB + 1;
    setB_HTML.innerText = setB;
    zerarPlacarDePontos();
    
}
}

function zerarPlacarDePontos() {
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;

    if (setA === 2 || setB ===2) {
        alert("Fim de jogo");
    }


}