const spin = new Audio('Sons/spin.wav');
const fail = new Audio('Sons/fail.wav');
const shot = new Audio('Sons/shot.wav');

var cartucho = 0;
var balaVerdadeira = 0;

var botaoPuxarGatilho = document.querySelector('#puxarGatilho');
var botaoRodarTambor = document.querySelector('#rodarTambor');
const resultado = document.querySelector('#resultado');
const numeroCartucho = document.querySelector('#numeroCartucho');

botaoRodarTambor.addEventListener('click', rodarTambor);
botaoPuxarGatilho.addEventListener('click', puxarGatilho);

botaoPuxarGatilho.disabled=true;

function rodarTambor() {
    spin.play();

    balaVerdadeira = Math.floor(Math.random() * 6 + 1);
    cartucho = 0;

    numeroCartucho.innerText=`${cartucho}/6`
    resultado.innerText = '[ Tambor rodado ]'

    botaoPuxarGatilho.disabled=false;
}

function puxarGatilho() {
    cartucho++;

    numeroCartucho.innerText=`${cartucho}/6`

    if (cartucho == balaVerdadeira) {
        shot.play();

        document.body.style.backgroundColor='white';

        resultado.innerText = 'KABOOOM! VOCÊ MORREU!';

        setInterval("document.body.style.backgroundColor='black';", 250);
    } else {
        fail.play();

        resultado.innerText = 'Ufa... O cartucho estava vazio.';
    }

    if (cartucho == 6) {
        botaoPuxarGatilho.disabled=true;

        return;
    }
}


