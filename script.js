//PEDRA
var pedra = document.getElementById('pedra')
pedra.addEventListener('click', clickpedra)

function clickpedra() {
    resjogador.innerHTML = 'Pedra'
}

//PAPEL
var papel = document.getElementById('papel')
papel.addEventListener('click', clickpapel)

function clickpapel() {
    resjogador.innerHTML = 'Papel'
}

//TESOURA
var tesoura = document.getElementById('tesoura')
tesoura.addEventListener('click', clicktesoura)

function clicktesoura() {
    resjogador.innerHTML = 'Tesoura'
}