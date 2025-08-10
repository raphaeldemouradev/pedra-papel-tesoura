//pedra
var stone = document.getElementById('pedra')
stone.addEventListener('click', function pedra() {
    var resjogador = document.getElementById('resjogador')

    resjogador.style.backgroundImage = "url('./imagens/mao-pedra.avif')"

    escolha = 'Pedra'
    resjogador.innerHTML = escolha

    resmaquina .style.backgroundImage = ''
    resmaquina.innerHTML = 'Esperando ação...'
    resultado.innerHTML = ''
})

//papel
var paper = document.getElementById('papel')
paper.addEventListener('click', function papel() {
    var resjogador = document.getElementById('resjogador')

    resjogador.style.backgroundImage = "url('./imagens/mao-papel.avif')"

    escolha = 'Papel'
    resjogador.innerHTML = escolha

    resmaquina .style.backgroundImage = ''
    resmaquina.innerHTML = 'Esperando ação...'
    resultado.innerHTML = ''
})

//tesoura
var cut = document.getElementById('tesoura')
cut.addEventListener('click', function tesoura() {
    var resjogador = document.getElementById('resjogador')

    resjogador.style.backgroundImage = "url('./imagens/mao-tesoura.png')"

    escolha = 'Tesoura'
    resjogador.innerHTML = escolha

    resmaquina .style.backgroundImage = ''
    resmaquina.innerHTML = 'Esperando ação...'
    resultado.innerHTML = ''
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
        resultado.style.color = 'Orange'

    } else if ((escolhaMaquina === 'Pedra' && escolha === 'Tesoura')) {
        resultado.innerHTML = 'Voçê Perdeu'
        resultado.style.color = 'red'

    } else if ((escolhaMaquina === 'Papel' && escolha === 'Pedra')) {
        resultado.innerHTML = 'Perdeu'
        resultado.style.color = 'red'

    } else if ((escolhaMaquina === 'Tesoura' && escolha === 'Papel')) {
        resultado.innerHTML = 'Voçê Perdeu'
        resultado.style.color = 'red'

    } else {
        resultado.innerHTML = 'Ganhou!!!'
        resultado.style.color = 'green'

    }


    if (escolhaMaquina === 'Pedra') {
        resmaquina.style.backgroundImage = "url('./imagens/mao-pedra.avif')"

    } else if (escolhaMaquina === 'Papel') {
        resmaquina.style.backgroundImage = "url('./imagens/mao-papel.avif')"

    } else {
        resmaquina.style.backgroundImage = "url('./imagens/mao-tesoura.png')"
    }
})