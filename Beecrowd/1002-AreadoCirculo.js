// código pra depuração do beecrowd
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var raio = parseFloat(lines[0].trim()); // variável de dupla precisão (double)
var area = n * (raio * raio);

console.log("A=" + area.toFixed(4)); // limita o double a 4 casas decimais