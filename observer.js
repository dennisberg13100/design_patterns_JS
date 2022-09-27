#! /usr/bin/env node

// Click é uma classe Subject que pode ser observado;
function Click() {
    // armazenar as funções de todos os observadores
    this.handlers = []  
    // cadastrar as funções dos observadores
    this.subscribe = (func) => this.handlers.push(func)  
    // remover as funções dos observados
    this.unsubscribe = (fn) => { 
        this.handlers = this.handlers.filter((item) => item !== fn)
    }
    // Ao acionar o evento, acionar a função de todos os observadores
    this.fire = () => this.handlers.forEach((item) => item()) 
       
}

const observer1 = () => console.log("I'm observer 1")
const observer2 = () => console.log("I'm observer 2")

// Criar um novo Objeto Click 
const click = new Click

// Vincular o clickEvent com a execução das funções dos observadores do click 
const clickEvent = click.fire


// cadastrar o observador 1
click.subscribe(observer1)
console.log(click)
// cadastrar o observador 2
click.subscribe(observer2)
console.log(click)
// remover  o observador 1
click.unsubscribe(observer1)
console.log(click)

// disparar o evento de click 
clickEvent()