#!/usr/bin/env node 

const pessoa = {
    nome: "Dennis",
    sobrenome: "van den Berg"
}

/*
 * Podemos acessar um atributo dentro de um objeto de duas formas 
 * a primeira é com um ponto e o nome do atributo (nome neste caso)
 * a segunda forma é passando uma string com o nome do atributo entre colchetes
 * dessa forma podemos passar uma variável dentro do colchetes e acessar a função desejada 
 */

console.log(pessoa.nome)
console.log(pessoa['nome'])

const formula = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b, 
    dividir: (a, b) =>  a / b
}

let operacao = 'subtrair' 
let a = 1 
let b = 2

// insiro a formula da operação na calculadora 
let calculadora = formula[operacao]

console.log('Operação da calculadora:')
console.log(calculo(a,b))

// O mesmo código utilizando ifstatement seria:

function abaco(operacao, a, b) {
    if (operacao === 'somar') {
        return a + b
    } 
    if (operacao === 'subtrair') {
        return a - b
    } 
    if (operacao === 'multiplicar') {
        return a * b
    } 
    if (operacao === 'dividir') {
        return a / b
    } 
}
console.log('Operação do abaco:')
console.log(abaco(operacao, a,b))