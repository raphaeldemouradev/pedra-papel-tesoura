//pedra
var stone = document.getElementById('pedra')
stone.addEventListener('click', function pedra() {
    var resjogador = document.getElementById('resjogador')

    escolha = 'Pedra'

    resjogador.innerHTML = escolha
})

//papel
var paper = document.getElementById('papel')
paper.addEventListener('click', function papel() {
    var resjogador = document.getElementById('resjogador')

    escolha = 'Papel'

    resjogador.innerHTML = escolha
})

//tesoura
var cut = document.getElementById('tesoura')
cut.addEventListener('click', function tesoura() {
    var resjogador = document.getElementById('resjogador')

    escolha = 'Tesoura'

    resjogador.innerHTML = escolha
})

//maquina
var gera = document.getElementById('escolhabot')
gera.addEventListener('click', function escolhabot() {
    var resmaquina = document.getElementById('resmaquina')
    var resultado = document.getElementById('resultado')

    var elementos = ['Pedra', 'Papel', 'Tesoura']
    var MeusNumeros = Math.floor(Math.random() * elementos.length)
    var escolhaMaquina = elementos[MeusNumeros]

    resmaquina.innerHTML = escolhaMaquina

    if (escolhaMaquina === escolha) {
        resultado.innerHTML = 'Empate'
    } else if ((escolhaMaquina === 'Pedra' && escolha === 'Tesoura')) {
        resultado.innerHTML = 'Perdeu'
    } else if ((escolhaMaquina === 'Papel' && escolha === 'Pedra')) {
        resultado.innerHTML = 'Perdeu'
    } else if ((escolhaMaquina === 'Tesoura' && escolha === 'Papel')) {
        resultado.innerHTML = 'Perdeu'
    } else {
        resultado.innerHTML = 'Ganhou'
    }
})