var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

var a = parseInt(valores[0]);
var b = parseInt(valores[1]);


if (a % b == 0 || b % a == 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}