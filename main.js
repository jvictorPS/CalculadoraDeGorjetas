const botaoCalcular = document.querySelector('#botao-calcular')
const inputPessoas = document.getElementById('quantidade-pessoas')
const inputValorConta = document.getElementById('valor-conta')
const percentualGorjetaFixa = document.querySelectorAll('#botao-percentual')
const gorjetaPersonalizada = document.querySelector('#input-percentual')
const resultadoTotalPessoa = document.getElementById('resultado-total-pessoa')
const resultadoGorjetaPessoa = document.getElementById('resultado-gorjeta-pessoa')
const spanErroValorZerado = document.getElementById('erro-maior-zero')
const botaoLimpar = document.getElementById('botao-limpar')


function verificaInputVazio() {
    if(inputPessoas.value !== "" && inputValorConta.value !== "" && verificaValorZerado()) {
        botaoCalcular.disabled = false
        botaoCalcular.classList.add('botao-calcular-ativado')
    } else {
        botaoCalcular.disabled = true
        botaoCalcular.classList.remove('botao-calcular-ativado')
    }
}

inputPessoas.addEventListener('input' , verificaInputVazio)
inputValorConta.addEventListener('input' , verificaInputVazio)

let percentualDaGorjeta = 0

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

function verificaValorZerado() {
    if (String(inputPessoas.value) === "0") {
        spanErroValorZerado.style.visibility = 'visible'
        inputPessoas.classList.add('input-pessoas-com-erro')
        return false
    } else {
        spanErroValorZerado.style.visibility = 'hidden'
        inputPessoas.classList.remove('input-pessoas-com-erro')
        return true
    }
}

inputPessoas.addEventListener('input' , verificaValorZerado)

function calcular() {

    if (Number(inputPessoas.value) === 0) {
        spanErroValorZerado.style.visibility = 'visible'
        inputPessoas.classList.add('input-pessoas-com-erro')
        return
    }

    let quantidadePessoas = Number(inputPessoas.value)
    let valorDaConta = Number(inputValorConta.value)

    let valorGorjetaTotal = (valorDaConta * percentualDaGorjeta)
    let valorGorjetaPessoa = (valorDaConta * percentualDaGorjeta) / quantidadePessoas
    let valorTotalPorPessoa = (valorDaConta + valorGorjetaTotal) / quantidadePessoas

    resultadoGorjetaPessoa.innerText = `R$ ${valorGorjetaPessoa.toFixed(2).replace(".", ",")}`
    resultadoTotalPessoa.innerText = `R$ ${valorTotalPorPessoa.toFixed(2).replace(".", ",")}`

}

botaoCalcular.addEventListener('click' , calcular)

function limpar() {
    inputValorConta.value = ""
    inputPessoas.value = ""
    gorjetaPersonalizada.value = ""
    percentualDaGorjeta = 0
    resultadoGorjetaPessoa.innerText = 'R$ 0,00'
    resultadoTotalPessoa.innerText = 'R$ 0,00'

    verificaInputVazio()
    verificaValorZerado()
}

botaoLimpar.addEventListener('click' , limpar)