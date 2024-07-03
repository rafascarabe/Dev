//MARK:  Meu codigo - 70% certo
// var lines = input.split('\n');

// var A = parseInt(lines[0]);
// var B = parseInt(lines[1]);
// var soma = A + B;

// console.log("X = ${soma}");

// MARK: Codigo esperado

// código pra depuração do beecrowd
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift()); // shift pega a 1° linha do array, atribui a A, e a remove;
var b = parseInt(lines.shift()); // shift pega o que agora é a 1° linha do array, atribui a B, e a remove;

console.log("X = " + (a + b));