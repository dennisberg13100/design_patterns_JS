#!/usr/bin/env node

// um factory é um ecxelente pattern para criar flocos de código isolados que se repetem. 

// Uma função de cria objetos vazios
function criaObjeto() {
    let objeto = {}
    return objeto
}

let pessoaA = criaObjeto()
let pessoaB = criaObjeto()
pessoaA.nome = 'Dennis'
pessoaB.nome = 'Laura'
console.log(pessoaA)
console.log(pessoaB)

// Aqui temos uma função que fabrica Objetos "pessoa"

function fabricarPessoa(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome 
    pessoa.sobrenome = sobrenome

    function nomeCompleto() {
        console.log('teste')
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }
    
    pessoa.nomeCompleto = nomeCompleto()

    return pessoa
}

const pessoaC = fabricarPessoa("Dennis", "van den Berg") 
const pessoaD = fabricarPessoa("Laura", "De Matteis")

console.log(pessoaC)
console.log(pessoaD)

// como a função fabrica pessoa retorna um objeto pessoa, cada pessoa acaba se tornando pública 
// Todos os valoresd de pessoa pode ser acessados de qualquer lugar

console.log(pessoaC.nome)
console.log(pessoaD.sobrenome)

// Encapsulando uma função na função fabricarPessoa e disponibilizando apenas o que quermos 

console.log(pessoaD.nomeCompleto)