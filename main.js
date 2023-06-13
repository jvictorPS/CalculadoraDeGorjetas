const botaoCalcular = document.querySelector('#botao-calcular')
const inputPessoas = document.getElementById('quantidade-pessoas')
const inputValorConta = document.getElementById('valor-conta')
const percentualGorjetaFixa = document.querySelectorAll('#botao-percentual')
const gorjetaPersonalizada = document.querySelector('#input-percentual')

function verificaInputVazio() {
    if(inputPessoas.value !== "" && inputValorConta.value !== "") {
        botaoCalcular.disabled = false
        botaoCalcular.classList.add('botao-calcular-ativado')
    } else {
        botaoCalcular.disabled = true
        botaoCalcular.classList.remove('botao-calcular-ativado')
    }
}

function calcular() {

}

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

inputPessoas.addEventListener('input' , verificaInputVazio)
inputValorConta.addEventListener('input' , verificaInputVazio)


botaoCalcular.addEventListener('click' , () => {
    console.log('funcionando')
})
