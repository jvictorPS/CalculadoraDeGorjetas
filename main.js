const botaoCalcular = document.querySelector('#botao-calcular')
const inputPessoas = document.getElementById('quantidade-pessoas')
const inputValorConta = document.getElementById('valor-conta')
const percentualGorjetaFixa = document.querySelectorAll('#botao-percentual')
const gorjetaPersonalizada = document.querySelector('#input-percentual')
const resultadoTotalPessoa = document.getElementById('resultado-total-pessoa')
const resultadoGorjetaPessoa = document.getElementById('resultado-gorjeta-pessoa')


function verificaInputVazio() {
    if(inputPessoas.value !== "" && inputValorConta.value !== "") {
        botaoCalcular.disabled = false
        botaoCalcular.classList.add('botao-calcular-ativado')
    } else {
        botaoCalcular.disabled = true
        botaoCalcular.classList.remove('botao-calcular-ativado')
    }
}

inputPessoas.addEventListener('input' , verificaInputVazio)
inputValorConta.addEventListener('input' , verificaInputVazio)

let percentualDaGorjeta

function verificaPercentualGorjetaPersonalizada() {
    percentualDaGorjeta = Number ((gorjetaPersonalizada.value) / 100)
    return percentualDaGorjeta
}

gorjetaPersonalizada.addEventListener('input' , verificaPercentualGorjetaPersonalizada)

function verificaPercentualGorjetaFixa(evento) {
    percentualDaGorjeta = Number(evento.target.value)
    gorjetaPersonalizada.value = ""
    return percentualDaGorjeta
}

percentualGorjetaFixa.forEach( (elemento) => {
    elemento.addEventListener('click' , (e) => {
        verificaPercentualGorjetaFixa(e)
    })
})

function calcular() {
    let quantidadePessoas = Number(inputPessoas.value)
    let valorDaConta = Number(inputValorConta.value)

    let valorGorjetaTotal = (valorDaConta * percentualDaGorjeta)
    let valorGorjetaPessoa = (valorDaConta * percentualDaGorjeta) / quantidadePessoas
    let valorTotalPorPessoa = (valorDaConta + valorGorjetaTotal) / quantidadePessoas

    resultadoGorjetaPessoa.innerText = `R$ ${valorGorjetaPessoa.toFixed(2).replace("." , ",")}`
    resultadoTotalPessoa.innerText = `R$ ${valorTotalPorPessoa.toFixed(2).replace("." , ",")}`
}

botaoCalcular.addEventListener('click' , calcular)
